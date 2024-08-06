using Asp.Versioning;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Api.Common.Attributes;

namespace bed.Search.v1
{
    // TOD: any use? -  [OutputCache(PolicyName = Constants.DeliveryApi.OutputCache.ContentCachePolicy)]
    [MapToApi(Constants.ApiName)]
    [ApiExplorerSettings(GroupName = Constants.ApiTitle)]
    [ApiController, ApiVersion("1.0")]
    [Route("v{version:apiVersion}/search")]
    public class SearchController
    {
        [HttpGet]
        public Task<SearchResult[]> SearchAsync([FromQuery] SearchOptions? options)
        {
            // TODO: validate
            // TODO: perform search
            return Task.FromResult<SearchResult[]>(new SearchResult[0]);
        }
    }
}