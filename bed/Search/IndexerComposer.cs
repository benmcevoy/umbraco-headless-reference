using bed.Search.ComputedFields;
using Examine;
using Umbraco.Cms.Core.Composing;

namespace bed.Search
{
    public class IndexerComposer : ComponentComposer<Indexer>;

    public class Indexer(IExamineManager _examineManager, IEnumerable<IComputedField> _computedFields) : IComponent
    {
        public void Initialize()
        {
            var index = _examineManager.Indexes.FirstOrDefault(i => i.Name.Equals(Constants.IndexName));

            if (index != null)
            {
                ((BaseIndexProvider)index).TransformingIndexValues += OnTransformingIndexValues;
            }
        }

        public void Terminate() { }

        private void OnTransformingIndexValues(object? sender, IndexingItemEventArgs e)
        {
            var updatedValues = e.ValueSet.Values.ToDictionary(x => x.Key, x => x.Value);

            foreach (var computedField in _computedFields)
            {
                if (computedField.TryGetValue(e, out var value)) updatedValues[computedField.Name] = [value];
            }

            e.SetValues(updatedValues.ToDictionary(x => x.Key, x => (IEnumerable<object>)x.Value));
        }
    }
}