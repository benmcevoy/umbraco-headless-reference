namespace bed.Search
{
    public class SearchOptions
    {
        public string Query { get; set; } = "";
        public uint PageNumber { get; set; } = 1;
        public uint PageSize { get; set; } = 10;
        public string Sort { get; set; } = "";
        public string[] Tags { get; set; } = [];
    }
}
