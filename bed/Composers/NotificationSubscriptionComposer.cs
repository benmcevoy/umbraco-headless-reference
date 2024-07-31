using bed.FaultHandling;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.Notifications;

namespace bed.Composers
{
    public class NotificationSubscriptionComposer : IComposer
    {
        public void Compose(IUmbracoBuilder builder)
        {
            var config = builder.Config.GetSection("bed").Get<bed.Configuration>()!;

            builder.Services.AddHttpClient();

            builder.Services.AddSingleton((serviceProvider) => config);
            builder.Services.AddSingleton<RetryPolicyFactory>();

            builder.AddNotificationAsyncHandler<ContentPublishedNotification, bed.Handlers.RemoteContentUpdate>()
                    .AddNotificationAsyncHandler<ContentDeletedNotification, bed.Handlers.RemoteContentUpdate>()
                    .AddNotificationAsyncHandler<ContentUnpublishedNotification, bed.Handlers.RemoteContentUpdate>();
        }
    }
}