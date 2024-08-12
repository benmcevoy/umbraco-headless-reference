using Umbraco.Cms.Core.DeliveryApi;

namespace bed.ContentApi.Filters;

public class HideFromNavigationFilter : IFilterHandler
{
    private const string FilterSpecifier = "hideFromNavigation:";
    private const string FieldName = "hideFromNavigation";

    public FilterOption BuildFilterOption(string filter)
    {
        var fieldValue = filter.Substring(FilterSpecifier.Length);

        // There might be several values for the filter
        var values = fieldValue.Split(',');

        return new FilterOption
        {
            FieldName = FieldName,
            Values = values,
            Operator = FilterOperation.Is
        };
    }

    public bool CanHandle(string query)
           => query.StartsWith(FilterSpecifier, StringComparison.OrdinalIgnoreCase);
}