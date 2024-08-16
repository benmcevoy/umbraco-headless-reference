namespace bed.Shared
{
    public class Configuration
    {
        public class Site
        {
            public string Name { get; set; } = "";
            public bool RemoteDisabled { get; set; } = false;
            public string RemoteApiKey { get; set; } = "";
            public string RemoteApiCacheEndpoint { get; set; } = "";
        }

        public class Search
        {
            public ICollection<string> AggregateContentFields { get; set; } = [];
        }

        public bool IsBackOfficeDisabled { get; set; } = false;
        public bool IsWebsiteDisabled { get; set; } = false;
        public ICollection<Site> Sites { get; set; } = [];
        public Search SearchOptions { get; set; } = new Search();
    }
}
