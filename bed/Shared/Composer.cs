
using bed.FaultHandling;
using Umbraco.Cms.Core.Composing;

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
        }
    }
}