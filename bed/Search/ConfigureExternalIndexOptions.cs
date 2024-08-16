using Examine;
using Examine.Lucene;
using Microsoft.Extensions.Options;

namespace bed.Search
{
    public class ConfigureExternalIndexOptions : IConfigureNamedOptions<LuceneDirectoryIndexOptions>
    {
        public void Configure(string name, LuceneDirectoryIndexOptions options)
        {
            if (name == Constants.IndexName)
            {
                options.FacetsConfig.SetMultiValued(Constants.Fields.Tags, true);

                options.FieldDefinitions.AddOrUpdate(new FieldDefinition( Constants.Fields.Tags, FieldDefinitionTypes.FacetFullText));
            }
        }

        public void Configure(LuceneDirectoryIndexOptions options)
        {
            // not used
        }
    }
}