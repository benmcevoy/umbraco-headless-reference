// This file is auto-generated by @hey-api/openapi-ts

import type { CancelablePromise } from './core/CancelablePromise';
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';
import type { GetV1SearchData, GetV1SearchResponse } from './types.gen';

/**
 * @param data The data for the request.
 * @param data.query
 * @param data.pageNumber
 * @param data.pageSize
 * @param data.sort
 * @param data.tags
 * @returns SearchResult Success
 * @throws ApiError
 */
export const getV1Search = (data: GetV1SearchData = {}): CancelablePromise<GetV1SearchResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/v1/search',
    query: {
        Query: data.query,
        PageNumber: data.pageNumber,
        PageSize: data.pageSize,
        Sort: data.sort,
        Tags: data.tags
    }
}); };