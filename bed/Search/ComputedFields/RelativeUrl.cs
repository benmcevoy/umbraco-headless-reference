using Examine;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Strings;

namespace bed.Search.ComputedFields
{
    public class RelativeUrl : IComputedField
    {
        private readonly IContentService _contentService;
        private readonly DefaultUrlSegmentProvider _url;

        public RelativeUrl(IContentService contentService, DefaultUrlSegmentProvider url)
        {
            _contentService = contentService;
            _url = url;
        }

        public string Name => Constants.Fields.RelativeUrl;

        public bool TryGetValue(IndexingItemEventArgs indexingItemEventArgs, out object value)
        {
            value = GetUrl((int)indexingItemEventArgs.ValueSet.Values[Constants.Fields.Id][0], "/");

            return value != null;
        }

        private string GetUrl(int contentId, string url)
        {
            var content = _contentService.GetById(contentId);

            if (content == null) return url;
            if (content.ParentId == -1) return url;

            var urlSegment = _url.GetUrlSegment(content);

            return GetUrl(content.ParentId, $"/{urlSegment}{url}");
        }
    }
}