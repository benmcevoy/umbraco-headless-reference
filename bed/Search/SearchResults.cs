namespace bed.Search
{
    public class SearchResults
    {
        public long Total { get; set; } = 0;
        public IEnumerable<SearchResult> Results { get; set; } = [];
        public SearchQuery QueryOptions { get; set; } = new SearchQuery();
        public IEnumerable<SearchTag> Tags { get; set; } = [];
    }
}
