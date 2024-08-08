using Asp.Versioning;
using Examine;
using Examine.Search;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Api.Common.Attributes;

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

        public SearchController(IExamineManager examineManager)
        {
            _examineManager = examineManager;
        }

        [HttpGet]
        [MapToApiVersion("1.0")]
        public SearchResults Search([FromQuery] SearchOptions? options)
        {
            // TODO: validate
            // TODO: perform search

            // start item
            // tags
            // hide from search
            // current site

            var query = options?.Query;

            if (!string.IsNullOrEmpty(query) && _examineManager.TryGetIndex(Constants.IndexName, out IIndex? index))
            {
                var results = index
                    .Searcher
                    .CreateQuery("content")
                    .ManagedQuery(query)
                    .Execute(QueryOptions.SkipTake((options!.PageNumber - 1) * options.PageSize, options.PageSize));

                return new SearchResults
                {
                    Total = results.TotalItemCount,
                    Options = options ?? new SearchOptions(),
                    Results = ToSearchResults(results)
                };
            }

            return new SearchResults
            {
                Total = 0,
                Options = options ?? new SearchOptions(),
                Results = []
            };
        }

        private static IEnumerable<SearchResult> ToSearchResults(ISearchResults examineResults)
        {
            foreach (var searchResult in examineResults.OrderByDescending(x => x.Score))
            {
                yield return new SearchResult
                {
                    Title = searchResult[Constants.Fields.Title],
                    ContentType = searchResult[Constants.Fields.ContentType],
                    // TODO: body is too big and has html/rich text, normally I want summary to be a "tweet's worth"
                    // use a metadata Summary field and fallback
                    // for fun consider autosummarization, either my own or some LLM
                    Summary = searchResult[Constants.Fields.Summary],
                    ContentTypeDisplay = searchResult[Constants.Fields.ContentTypeDisplay],
                    Tags = searchResult.GetValues(Constants.Fields.Tags),
                    Url = searchResult[Constants.Fields.RelativeUrl],
                };
            }
        }
    }
}