using Asp.Versioning;
using Examine;
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
        public SearchResults Search([FromQuery] SearchOptions? options)
        {
            // TODO: validate
            // TODO: perform search

            // external index is default published content
            // a good default

            // consider:

            // a content field with all searchable fields aggregated
            // pdfs/media
            // BM25 relevancy
            // tags
            // start item actually would be good - for collections
            // avoid having to fetch the item after the search as the example does (umbraco helper)
            // be nice to have a custom "Searcher" or some backoffice UI to view/test query?
            // add the api-key auth thing too

            var query = options?.Query ?? "";

            if (!string.IsNullOrEmpty(query) && _examineManager.TryGetIndex("ExternalIndex", out IIndex? index))
            {
                var results = index
                    .Searcher
                    .CreateQuery("content")
                    .Field("title", query)
                    .Or()
                    .Field("body", query)
                    .Execute();

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
                    Title = searchResult["title"],
                    ContentType = searchResult["contentType"],
                    Summary = searchResult["body"],
                    ContentTypeDisplay = searchResult["contentType"],
                    Tags = [],
                    Url = "#"
                };
            }
        }
    }
}