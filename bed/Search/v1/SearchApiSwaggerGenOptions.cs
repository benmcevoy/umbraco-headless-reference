using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace bed.Search.v1
{
    public class SearchApiSwaggerGenOptions : IConfigureOptions<SwaggerGenOptions>
    {
        public void Configure(SwaggerGenOptions swaggerGenOptions)
        {
            swaggerGenOptions.SwaggerDoc(
                Constants.ApiName,
                new OpenApiInfo
                {
                    Title = Constants.ApiTitle,
                    Version = "Latest",
                });
        }
    }
}