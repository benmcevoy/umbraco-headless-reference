using Examine;
using Umbraco.Cms.Core.Services;

namespace bed.Search.ComputedFields
{
    public class ContentTypeDisplay : IComputedField
    {
        private readonly IContentService _contentService;

        public ContentTypeDisplay(IContentService contentService)
        {
            _contentService = contentService;
        }

        public string Name => Constants.Fields.ContentTypeDisplay;

        public bool TryGetValue(IndexingItemEventArgs indexingItemEventArgs, out object value)
        {
            var content = _contentService.GetById((int)indexingItemEventArgs.ValueSet.Values[Constants.Fields.Id][0]);
         
            value = content?.ContentType?.Name ?? "";

            return value != null;
        }
    }
}