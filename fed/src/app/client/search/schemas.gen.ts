// This file is auto-generated by @hey-api/openapi-ts

export const $SearchOptions = {
    type: 'object',
    properties: {
        query: {
            type: 'string'
        },
        pageNumber: {
            type: 'integer',
            format: 'int32'
        },
        pageSize: {
            type: 'integer',
            format: 'int32'
        },
        sort: {
            type: 'string'
        },
        tags: {
            type: 'array',
            items: {
                type: 'string'
            }
        }
    },
    additionalProperties: false
} as const;

export const $SearchResult = {
    type: 'object',
    properties: {
        contentType: {
            type: 'string'
        },
        contentTypeDisplay: {
            type: 'string'
        },
        url: {
            type: 'string'
        },
        title: {
            type: 'string'
        },
        summary: {
            type: 'string'
        },
        tags: {
            type: 'array',
            items: {
                type: 'string'
            }
        }
    },
    additionalProperties: false
} as const;

export const $SearchResults = {
    type: 'object',
    properties: {
        total: {
            type: 'integer',
            format: 'int64'
        },
        results: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/SearchResult'
            }
        },
        options: {
            '$ref': '#/components/schemas/SearchOptions'
        }
    },
    additionalProperties: false
} as const;