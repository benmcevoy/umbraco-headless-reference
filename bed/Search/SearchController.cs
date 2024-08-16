using Asp.Versioning;
using Examine;
using Examine.Lucene;
using Examine.Search;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Api.Common.Attributes;
using Umbraco.Cms.Core.PublishedCache;

namespace bed.Search
{
    // TODO: any use? -  [OutputCache(PolicyName = Constants.DeliveryApi.OutputCache.ContentCachePolicy)]
    [MapToApi(Constants.ApiName)]
    [ApiExplorerSettings(GroupName = Constants.ApiTitle)]
    [ApiController, ApiVersion("1.0")]
    [Route("v{version:apiVersion}/search")]
    public class SearchController
    {
        private readonly IExamineManager _examineManager;
        private readonly ITagQuery _tagQuery;

        public SearchController(IExamineManager examineManager, ITagQuery tagQuery)
        {
            _examineManager = examineManager;
            _tagQuery = tagQuery;
        }

        [HttpGet]
        [MapToApiVersion("1.0")]
        public SearchResults Search([FromQuery] SearchQuery? options)
        {
            var query = options?.Query;
            var tags = options?.Tags ?? [];

            if (!string.IsNullOrEmpty(query) && _examineManager.TryGetIndex(Constants.IndexName, out IIndex? index))
            {
                var results = index
                    .Searcher
                    .CreateQuery("content")
                    // TODO: scope search to a site? 
                    //.ParentId(rootId).And()
                    .NativeQuery($"{Constants.Fields.HideFromSearch}:0").And()
                    .Field(Constants.Fields.AggregateContent, query)
                    .WithFacets(f => f.FacetString(Constants.Fields.Tags, facetConfiguration: null, tags))
                    .Execute(QueryOptions.SkipTake((options!.PageNumber - 1) * options.PageSize, options.PageSize));

                return new SearchResults
                {
                    Total = results.TotalItemCount,
                    QueryOptions = options ?? new SearchQuery(),
                    Results = ToSearchResults(results),
                    Tags = results
                                .GetFacet(Constants.Fields.Tags)?
                                .Select(f => new SearchTag { Text = f.Label, Count = (int)f.Value }) ?? []
                };
            }

            return new SearchResults
            {
                Total = 0,
                QueryOptions = options ?? new SearchQuery(),
                Results = [],
                Tags = []
            };
        }

        [HttpGet("Tags")]
        [MapToApiVersion("1.0")]
        public IEnumerable<SearchTag> Tags()
        {
            return _tagQuery
                .GetAllContentTags()
                .Where(t => t != null)
                .Where(t => !string.IsNullOrWhiteSpace(t!.Text))
                .Select(t => new SearchTag { Text = t!.Text!, Count = t.NodeCount });
        }

        private static IEnumerable<SearchResult> ToSearchResults(ISearchResults examineResults)
        {
            foreach (var searchResult in examineResults.OrderByDescending(x => x.Score))
            {
                yield return new SearchResult
                {
                    Title = searchResult[Constants.Fields.Title]!,
                    ContentType = searchResult[Constants.Fields.ContentType]!,
                    // TODO: body is too big and has html/rich text, normally I want summary to be a "tweet's worth"
                    // use a metadata Summary field and fallback
                    // for fun consider autosummarization, either my own or some LLM
                    Summary = searchResult[Constants.Fields.Summary]!,
                    ContentTypeDisplay = searchResult[Constants.Fields.ContentTypeDisplay]!,
                    Tags = searchResult.GetValues(Constants.Fields.Tags),
                    Url = searchResult[Constants.Fields.RelativeUrl]!,
                };
            }
        }
    }
}