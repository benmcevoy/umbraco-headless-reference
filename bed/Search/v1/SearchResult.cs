namespace bed.Search.v1
{
    public class SearchResult
    {
        public string ContentType { get; set; } = "";
        public string ContentTypeDisplay { get; set; } = "";
        public Link? Url { get; set; }
        public string Title { get; set; } = "";
        public string Summary { get; set; } = "";
        public string[] Tags { get; set; } = [];
    }

    public class Link
    {

        public string? Name { get; set; }
        public string? Target { get; set; }
        public bool IsExternal { get; set; }
        public string? Url { get; set; }
    }
}
