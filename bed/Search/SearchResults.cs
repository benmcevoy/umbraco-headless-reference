namespace bed.Search
{
    public class SearchResults
    {
        public long Total { get; set; } = 0;
        public IEnumerable<SearchResult> Results { get; set; } = [];
        public SearchOptions Options { get; set; } = new SearchOptions();
    }
}
