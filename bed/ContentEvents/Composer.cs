using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.Notifications;

namespace bed.ContentEvents
{
    public class Composer : IComposer
    {
        public void Compose(IUmbracoBuilder builder)
        {
            builder.AddNotificationAsyncHandler<ContentPublishedNotification, bed.ContentEvents.RemoteContentUpdate>()
                    .AddNotificationAsyncHandler<ContentDeletedNotification, bed.ContentEvents.RemoteContentUpdate>()
                    .AddNotificationAsyncHandler<ContentUnpublishedNotification, bed.ContentEvents.RemoteContentUpdate>();
        }
    }
}