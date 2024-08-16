using bed.Search.ComputedFields;
using Umbraco.Cms.Core.Composing;

namespace bed.Search
{
    public class Composer : IComposer
    {
        public void Compose(IUmbracoBuilder builder)
        {
            builder.Services
                .ConfigureOptions<SearchApiSwaggerGenOptions>()
                .ConfigureOptions<ConfigureExternalIndexOptions>()
                .AddTransient<IComputedField, RelativeUrl>()
                .AddTransient<IComputedField, ContentTypeDisplay>()
                .AddTransient<IComputedField, AggregateContent>();
        }
    }
}