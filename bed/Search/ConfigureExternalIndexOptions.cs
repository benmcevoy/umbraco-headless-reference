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
            }
        }

        public void Configure(LuceneDirectoryIndexOptions options)
        {
            // not used
        }
    }
}