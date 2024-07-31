namespace bed
{
    public class Configuration
    {
        public class Site
        {
            public string Name { get; set; } = "";
            public string RemoteApiKey { get; set; } = "";
            public string RemoteApiCacheEndpoint { get; set; } = "";
        }

        public bool IsBackOfficeDisabled { get; set; } = false;
        public bool IsWebsiteDisabled { get; set; } = false;
        public ICollection<Site> Sites { get; set; } = [];
    }
}
