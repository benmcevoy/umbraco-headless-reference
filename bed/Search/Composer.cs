using Umbraco.Cms.Core.Composing;

namespace bed.Search
{
    public class Composer : IComposer
    {
        public void Compose(IUmbracoBuilder builder)
        {
            builder.Services.ConfigureOptions<SearchApiSwaggerGenOptions>();
        }
    }
}