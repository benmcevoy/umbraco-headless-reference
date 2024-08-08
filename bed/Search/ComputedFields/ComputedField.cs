using Examine;

namespace bed.Search.ComputedFields
{
    public interface IComputedField
    {
        string Name { get; }
        bool TryGetValue(IndexingItemEventArgs indexingItemEventArgs, out object value);
    }
}