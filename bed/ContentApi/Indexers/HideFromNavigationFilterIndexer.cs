using Umbraco.Cms.Core.DeliveryApi;
using Umbraco.Cms.Core.Models;

namespace bed.ContentApi.Indexers;

public class HideFromNavigationIndexer : IContentIndexHandler
{
    private const string FieldName = "hideFromNavigation";

    public IEnumerable<IndexField> GetFields()
    {
        return [
                new IndexField
                {
                    FieldName = FieldName,
                    FieldType = FieldType.StringRaw,
                    VariesByCulture = false
                }
            ];
    }

    public IEnumerable<IndexFieldValue> GetFieldValues(IContent content, string? culture)
    {
        var value = content.GetValue<bool>(FieldName);

        return [
                new IndexFieldValue
                {
                    FieldName = FieldName,
                    Values = [value ? "1" : "0"]
                }
            ];
    }

}