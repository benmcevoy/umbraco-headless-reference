using bed.Shared;
using Examine;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Cms.Core.Serialization;
using Umbraco.Cms.Core.Services;

namespace bed.Search.ComputedFields
{
    public class AggregateContent : IComputedField
    {
        private readonly IContentService _contentService;
        private readonly Configuration _configuration;
        private readonly IJsonSerializer _jsonSerializer;
        private readonly ILogger<AggregateContent> _logger;

        public AggregateContent(IContentService contentService, Configuration configuration, IJsonSerializer jsonSerializer, ILogger<AggregateContent> logger)
        {
            _contentService = contentService;
            _configuration = configuration;
            _jsonSerializer = jsonSerializer;
            _logger = logger;
        }

        public string Name => Constants.Fields.AggregateContent;

        public bool TryGetValue(IndexingItemEventArgs indexingItemEventArgs, out object value)
        {
            value = "";
            var success = false;
            var content = _contentService.GetById((int)indexingItemEventArgs.ValueSet.Values[Constants.Fields.Id][0]);

            if (content == null) return false;

            foreach (var field in _configuration.SearchOptions.AggregateContentFields)
            {
                if (!content.HasProperty(field)) continue;

                var property = content.Properties[field];

                if (property == null) continue;

                var rawValue = property.Values.FirstOrDefault()?.PublishedValue ?? "";

                switch (property.PropertyType.PropertyEditorAlias)
                {
                    case Umbraco.Cms.Core.Constants.PropertyEditors.Aliases.TextBox:
                    case Umbraco.Cms.Core.Constants.PropertyEditors.Aliases.MultipleTextstring:
                    // assumes Tags is stored as CSV and not JSON
                    case Umbraco.Cms.Core.Constants.PropertyEditors.Aliases.Tags:
                        value += rawValue + " ";
                        break;

                    case Umbraco.Cms.Core.Constants.PropertyEditors.Aliases.TinyMce:
                        if (RichTextPropertyEditorHelper.TryParseRichTextEditorValue(rawValue, _jsonSerializer, _logger, out var rte))
                        {
                            value += rte.Markup.StripHtml() + " ";
                        }
                        break;
                }

                success = true;

            }

            return success;
        }
    }
}