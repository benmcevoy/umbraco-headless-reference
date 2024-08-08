namespace bed.Search
{
    public class Constants
    {
        public const string ApiName = "bed.search";
        public const string ApiTitle = "Search API";
        public const string IndexName = Umbraco.Cms.Core.Constants.UmbracoIndexes.ExternalIndexName;

        public class Fields
        {
            public const string RelativeUrl = "relativeUrl";
            public const string Id = "id";
            public const string Title = "title";
            public const string Body = "body";
            public const string Tags = "tags";
            public const string Summary = "summary";
            public const string ContentType = "__NodeTypeAlias";
            public const string ContentTypeDisplay = "contentTypeDisplay";
        }
    }
}
