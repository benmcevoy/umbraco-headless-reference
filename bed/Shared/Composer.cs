
using bed.FaultHandling;
using Umbraco.Cms.Core.Composing;
using uSync.BackOffice.Configuration;

namespace bed.Shared
{
    public class Composer : IComposer
    {
        public void Compose(IUmbracoBuilder builder)
        {
            var config = builder.Config.GetSection("bed").Get<Configuration>()!;

            builder.Services.AddHttpClient();

            builder.Services.AddSingleton((serviceProvider) => config);
            builder.Services.AddSingleton<RetryPolicyFactory>();


            // load the config for ContentOnly set
            builder.Services.Configure<uSyncHandlerSetSettings>(
                "SettingsOnly",
                builder.Config.GetSection(uSync.BackOffice.uSync.Configuration.uSyncSetsConfigPrefix + "SettingsOnly"));

            // load the config for ContentOnly set
            builder.Services.Configure<uSyncHandlerSetSettings>(
                "ContentOnly",
                builder.Config.GetSection(uSync.BackOffice.uSync.Configuration.uSyncSetsConfigPrefix + "ContentOnly"));
        }
    }
}