# Search

## Api

The `SearchController` exposes the API.

Refer to the `SearchApiSwaggerGenOptions` and `/umbraco/swagger`.

The API is currently public and has no api-key or authentication.

Review the umbraco source to see how to configure auth if required.

## Computed fields

Refer to the `IndexerComposer` and `Composer`.

Computed Field is an idea copied from the sitecore search implementation.

Computed Fields must implement the `IComputedField` interface and be registered for DI in the `Comnposer`.

If deeper IOC is desired push the configuration to appSettings and use that to register fields.

## Tags

v13 of Umbraco ships with Examine v3, which does not have faceting supporting.

Examine v4 has been added instead.

Refer to the `ConfigureExternalIndexOptions`.

## Results

The `/tags` endpoint can provide a set of tags and count of associated documents.

The `/search` results contains the tags in each search result, and the tags and counts for the entire query.