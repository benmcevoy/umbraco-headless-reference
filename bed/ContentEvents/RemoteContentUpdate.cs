using bed.FaultHandling;
using bed.Models;
using Umbraco.Cms.Core.DeliveryApi;
using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Models.DeliveryApi;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Core.PublishedCache;

namespace bed.ContentEvents
{
    /// <summary>
    /// Notify the remote sever (typically the front end server, e.g. NextJs) of a content update.
    /// </summary>
    /// <Remarks>
    /// This class is quite complex.  I choose this to avoid putting the api key or secret into content.
    /// I was also concerned that if the database or content was synchronised down from production
    /// to a "lower" environement you may accidently start publishing events to production!
    /// However, if you are comfortable with the secret being in content then use an Umbraco WebHook instead.
    /// If you do use a WebHook consider checking the uSync configuration to avoid serializing those items.
    /// </Remarks>
    public class RemoteContentUpdate(IPublishedSnapshotAccessor publishedSnapshotAccessor,
                IApiContentBuilder apiContentBuilder,
                bed.Configuration config,
                RetryPolicyFactory retryPolicyFactory,
                IHttpClientFactory httpClientFactory) : INotificationAsyncHandler<ContentPublishedNotification>,
                    INotificationAsyncHandler<ContentDeletedNotification>,
                    INotificationAsyncHandler<ContentUnpublishedNotification>
    {
        private const string SECRET_HEADER = "X-Secret";
        private readonly Configuration _config = config;
        private readonly IPublishedSnapshotAccessor _publishedSnapshotAccessor = publishedSnapshotAccessor;
        private readonly IApiContentBuilder _apiContentBuilder = apiContentBuilder;
        private readonly RetryPolicyFactory _retryPolicyFactory = retryPolicyFactory;
        private readonly IHttpClientFactory _httpClientFactory = httpClientFactory;

        public Task HandleAsync(ContentPublishedNotification notification, CancellationToken cancellationToken) =>
                    HandleImplAsync(notification.PublishedEntities, cancellationToken);
        public Task HandleAsync(ContentDeletedNotification notification, CancellationToken cancellationToken) =>
                    HandleImplAsync(notification.DeletedEntities, cancellationToken);
        public Task HandleAsync(ContentUnpublishedNotification notification, CancellationToken cancellationToken) =>
                    HandleImplAsync(notification.UnpublishedEntities, cancellationToken);

        private Task HandleImplAsync(IEnumerable<IContent> content, CancellationToken cancellationToken)
        {
            foreach (var c in content.ToList())
            {
                var publishedContent = GetPublishedContent(c.Id)
                        ?? throw new InvalidOperationException($"RemoteContentUpdate - cannot find published content for id {c.Id}");

                var entity = ToRequestPayload(publishedContent)!;

                var currentSite = GetSite(publishedContent)
                        ?? throw new InvalidOperationException($"RemoteContentUpdate -  cannot find site for id {c.Id}. Check the configured siteName in appSettings matches the published siteName."); ;

                Task.Factory.StartNew(() =>
                {
                    var client = _httpClientFactory.CreateClient();

                    client.DefaultRequestHeaders.Add(SECRET_HEADER, currentSite.RemoteApiKey);

                    var retry = _retryPolicyFactory.GetDefaultHttpRequestErrorRetryPolicy();

                    retry.ExecuteAction(() => client
                                .PostAsJsonAsync(currentSite.RemoteApiCacheEndpoint, entity, cancellationToken)
                                .Wait(cancellationToken)
                                );
                }, cancellationToken);
            }

            return Task.CompletedTask;
        }

        private Configuration.Site? GetSite(IPublishedContent publishedContent)
        {
            var home = publishedContent.AncestorOrSelf(HomePage.ModelTypeAlias) as HomePage;
            var siteName = home?.SiteName ?? "";

            return _config.Sites.SingleOrDefault(s => s.Name == siteName);
        }

        private IPublishedContent? GetPublishedContent(int id)
        {
            if (_publishedSnapshotAccessor.TryGetPublishedSnapshot(out IPublishedSnapshot? publishedSnapshot) is false
                                || publishedSnapshot!.Content is null)
            {
                return null;
            }

            return publishedSnapshot.Content.GetById(id);
        }

        private IApiContent? ToRequestPayload(IPublishedContent publishedContent)
        {
            return publishedContent is null ? null : _apiContentBuilder.Build(publishedContent);
        }
    }
}