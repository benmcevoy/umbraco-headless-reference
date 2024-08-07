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

            // external index is default published content
            // a good default

            // consider:
            // https://github.com/umbraco/Umbraco-CMS/blob/contrib/src/Umbraco.Infrastructure/Examine/ContentIndexPopulator.cs
            // a content field with all searchable fields aggregated
            // pdf/media
            // BM25 relevancy
            // tags
            // start item actually would be good - for collections
            // avoid having to fetch the item after the search as the example does (umbraco helper)
            // be nice to have a custom "Searcher" or some backoffice UI to view/test query?
            // add the api-key auth thing too

            // consider: lucene has vector and embedding search (alledgely)
            // probably too difficult to implement here
            // and i don't have an LLM handy (llama maybe?)

            var query = options?.Query;

            if (!string.IsNullOrEmpty(query) && _examineManager.TryGetIndex(Constants.IndexName, out IIndex? index))
            {
                var results = index
                    .Searcher
                    .CreateQuery("content")
                    // search everything
                    // TODO: quite broad - finds any content
                    // e.g. navigation item
                    // this may be a problem with my IA/content model
                    // or an opportunity to support "cards" or quick results (no url, just the content directly)
                    // at any rate be explict as to which content types are included
                    .ManagedQuery(query)
                    // and tags
                    // and start item if we have that
                    // and ignore where checked "hide from search"
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
                    Title = searchResult["title"],
                    ContentType = searchResult["__NodeTypeAlias"],
                    // TODO: body is too big and has html/rich text, normally I want summary to be a "tweet's worth"
                    // use a metadata Summary field and fallback
                    // for fun consider autosummarization, either my own or some LLM
                    Summary = searchResult["body"],
                    // TODO: content model is not very good for headless - should be "Article", "FAQ" etc something domain specific
                    // one column, two column etc. makes no sense if you are "content first"
                    ContentTypeDisplay = searchResult["__NodeTypeAlias"],
                    Tags = searchResult.GetValues("tags"),
                    // TODO: url is not in the index, just the id
                    Url = "#"
                };
            }
        }
    }
}