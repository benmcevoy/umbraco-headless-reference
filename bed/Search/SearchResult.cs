namespace bed.Search
{

    public class SearchResult
    {
        public string ContentType { get; set; } = "";
        public string ContentTypeDisplay { get; set; } = "";
        public string Url { get; set; } = "#";
        public string Title { get; set; } = "";
        public string Summary { get; set; } = "";
        public IEnumerable<string> Tags { get; set; } = [];
    }
}
