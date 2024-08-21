using Asp.Versioning;
using Examine;
using Examine.Lucene;
using Examine.Search;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Api.Common.Attributes;

namespace bed.Search
{
    [MapToApi(Constants.ApiName)]
    [ApiExplorerSettings(GroupName = Constants.ApiTitle)]
    [ApiController, ApiVersion("1.0")]
    [Route("v{version:apiVersion}/search")]
    public class SearchController
    {
        private readonly IExamineManager _examineManager;

        public SearchController(IExamineManager examineManager)
        {
            _examineManager = examineManager;
        }

        [HttpGet]
        [MapToApiVersion("1.0")]
        public SearchResults Search([FromQuery] SearchQuery? queryOptions)
        {
            var query = queryOptions?.Query;
            var tags = queryOptions?.Tags ?? [];

            if (!string.IsNullOrEmpty(query) && _examineManager.TryGetIndex(Constants.IndexName, out IIndex? index))
            {
                var results = index
                                    .Searcher
                                    .CreateQuery("content")
                                    // TODO: scope search to a site? 
                                    //.ParentId(rootId).And()

                                    // TODO: I do not understand the examine facet
                                    // expected the WithFacets to just work but it does not
                                    // emit any query part
                                    .NativeQuery($"{Constants.Fields.HideFromSearch}:0 {AndTags(tags)}")
                                    .And()
                                    .Field(Constants.Fields.AggregateContent, query)
                                    .WithFacets(f => f.FacetString(Constants.Fields.Tags))
                                    .Execute(QueryOptions.SkipTake((queryOptions!.PageNumber - 1) * queryOptions.PageSize, queryOptions.PageSize));
                return new SearchResults
                {
                    Total = results.TotalItemCount,
                    QueryOptions = queryOptions ?? new SearchQuery(),
                    Results = ToSearchResults(results),
                    Tags = results
                                .GetFacet(Constants.Fields.Tags)?
                                .Select(f => new SearchTag { Text = f.Label.ToLowerInvariant(), Count = (int)f.Value }) ?? []
                };
            }

            return new SearchResults
            {
                Total = 0,
                QueryOptions = queryOptions ?? new SearchQuery(),
                Results = [],
                Tags = []
            };
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
                    Tags = searchResult.GetValues(Constants.Fields.Tags).Select(t => t.ToLowerInvariant()),
                    Url = searchResult[Constants.Fields.RelativeUrl]!,
                };
            }
        }

        private static string AndTags(string[] tags)
        {
            if (tags == null || tags.Length == 0) return "";

            var x = tags
                .Where(t => !string.IsNullOrWhiteSpace(t))
                .DefaultIfEmpty()
                .Aggregate((seed, next) => $"{seed} AND tags:{next?.ToLowerInvariant() ?? ""}");

            if (string.IsNullOrWhiteSpace(x)) return "";

            return $"+({Constants.Fields.Tags}:{x})";
        }
    }
}