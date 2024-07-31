// This file is auto-generated by @hey-api/openapi-ts

export type ApiBlockGridAreaModel = {
    alias?: string;
    rowSpan?: number;
    columnSpan?: number;
    items?: Array<ApiBlockGridItemModel>;
};

export type ApiBlockGridItemModel = ApiBlockItemModel & {
    rowSpan?: number;
    columnSpan?: number;
    areaGridColumns?: number;
    areas?: Array<ApiBlockGridAreaModel>;
};

export type ApiBlockItemModel = {
    content?: IApiElementModel;
    settings?: IApiElementModel;
};

export type ApiBlockListModel = {
    items?: Array<(ApiBlockItemModel | ApiBlockGridItemModel)>;
};

export type ApiLinkModel = {
    readonly url?: string | null;
    readonly queryString?: string | null;
    readonly title?: string | null;
    readonly target?: string | null;
    readonly destinationId?: string | null;
    readonly destinationType?: string | null;
    route?: IApiContentRouteModel;
    linkType?: LinkTypeModel;
};

export type BasePageElementModel = IApiElementModelBase & {
    properties?: BasePagePropertiesModel;
};

export type BasePagePropertiesModel = {
    title?: string | null;
    body?: RichTextModel;
    keywords?: string | null;
    tags?: Array<(string)> | null;
};

export type CallToActionElementModel = IApiElementModelBase & {
    properties?: CallToActionPropertiesModel;
};

export type CallToActionPropertiesModel = {
    title?: string | null;
    link?: Array<ApiLinkModel> | null;
    text?: RichTextModel;
};

export type HomePageContentModel = IApiContentModelBase & {
    properties?: HomePagePropertiesModel;
};

export type HomePageContentResponseModel = IApiContentResponseModelBase & HomePageContentModel;

export type HomePagePropertiesModel = BasePagePropertiesModel;

export type HttpValidationProblemDetails = ProblemDetails & {
    errors?: {
        [key: string]: Array<(string)>;
    };
};

export type IApiContentModel = HomePageContentModel | OneColumnPageContentModel | TwoColumnPageContentModel;

export type IApiContentModelBase = IApiElementModelBase & {
    readonly name?: string | null;
    readonly createDate?: string;
    readonly updateDate?: string;
    route?: IApiContentRouteModel;
    readonly id?: string;
    readonly contentType?: string;
    readonly properties?: {
        [key: string]: unknown;
    };
};

export type IApiContentResponseModel = HomePageContentResponseModel | OneColumnPageContentResponseModel | TwoColumnPageContentResponseModel;

export type IApiContentResponseModelBase = IApiContentModelBase & {
    readonly cultures?: {
        [key: string]: IApiContentRouteModel;
    };
    readonly name?: string | null;
    readonly createDate?: string;
    readonly updateDate?: string;
    route?: IApiContentRouteModel;
    readonly id?: string;
    readonly contentType?: string;
    readonly properties?: {
        [key: string]: unknown;
    };
};

export type IApiContentRouteModel = {
    readonly path?: string;
    startItem?: IApiContentStartItemModel;
};

export type IApiContentStartItemModel = {
    readonly id?: string;
    readonly path?: string;
};

export type IApiElementModel = CallToActionElementModel | RichTextElementModel | BasePageElementModel;

export type IApiElementModelBase = {
    readonly id?: string;
    readonly contentType?: string;
    readonly properties?: {
        [key: string]: unknown;
    };
};

export type IApiMediaWithCropsResponseModel = {
    readonly path?: string;
    readonly createDate?: string;
    readonly updateDate?: string;
    focalPoint?: ImageFocalPointModel;
    readonly crops?: Array<ImageCropModel> | null;
    readonly id?: string;
    readonly name?: string;
    readonly mediaType?: string;
    readonly url?: string;
    readonly extension?: string | null;
    readonly width?: number | null;
    readonly height?: number | null;
    readonly bytes?: number | null;
    readonly properties?: {
        [key: string]: unknown;
    };
};

export type ImageCropCoordinatesModel = {
    x1?: number;
    y1?: number;
    x2?: number;
    y2?: number;
};

export type ImageCropModel = {
    alias?: string | null;
    width?: number;
    height?: number;
    coordinates?: ImageCropCoordinatesModel;
};

export type ImageFocalPointModel = {
    left?: number;
    top?: number;
};

export type LinkTypeModel = 'Content' | 'Media' | 'External';

export type OneColumnPageContentModel = IApiContentModelBase & {
    properties?: OneColumnPagePropertiesModel;
};

export type OneColumnPageContentResponseModel = IApiContentResponseModelBase & OneColumnPageContentModel;

export type OneColumnPagePropertiesModel = BasePagePropertiesModel & {
    components?: ApiBlockListModel;
};

export type PagedIApiContentResponseModel = {
    total: number;
    items: Array<IApiContentResponseModel>;
};

export type PagedIApiMediaWithCropsResponseModel = {
    total: number;
    items: Array<IApiMediaWithCropsResponseModel>;
};

export type ProblemDetails = {
    type?: string | null;
    title?: string | null;
    status?: number | null;
    detail?: string | null;
    instance?: string | null;
    [key: string]: (unknown | string | number) | undefined;
};

export type RichTextElementModel = IApiElementModelBase & {
    properties?: RichTextPropertiesModel;
};

export type RichTextModel = {
    markup?: string;
    blocks?: Array<(ApiBlockItemModel | ApiBlockGridItemModel)>;
};

export type RichTextPropertiesModel = {
    text?: RichTextModel;
};

export type TwoColumnPageContentModel = IApiContentModelBase & {
    properties?: TwoColumnPagePropertiesModel;
};

export type TwoColumnPageContentResponseModel = IApiContentResponseModelBase & TwoColumnPageContentModel;

export type TwoColumnPagePropertiesModel = BasePagePropertiesModel & {
    aside?: ApiBlockListModel;
};

export type GetContentData = {
    /**
     * Defines the language to return. Use this when querying language variant content items.
     */
    acceptLanguage?: string;
    /**
     * API key specified through configuration to authorize access to the API.
     */
    apiKey?: string;
    /**
     * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
     */
    expand?: string;
    /**
     * Specifies the content items to fetch. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
     */
    fetch?: string;
    /**
     * Defines how to filter the fetched content items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
     */
    filter?: Array<(string)>;
    /**
     * Whether to request draft content.
     */
    preview?: boolean;
    /**
     * Specifies the number of found content items to skip. Use this to control pagination of the response.
     */
    skip?: number;
    /**
     * Defines how to sort the found content items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
     */
    sort?: Array<(string)>;
    /**
     * URL segment or GUID of a root content item.
     */
    startItem?: string;
    /**
     * Specifies the number of found content items to take. Use this to control pagination of the response.
     */
    take?: number;
};

export type GetContentResponse = PagedIApiContentResponseModel;

export type GetContent20Data = {
    /**
     * Defines the language to return. Use this when querying language variant content items.
     */
    acceptLanguage?: string;
    /**
     * API key specified through configuration to authorize access to the API.
     */
    apiKey?: string;
    /**
     * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
     */
    expand?: string;
    /**
     * Specifies the content items to fetch. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
     */
    fetch?: string;
    /**
     * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
     */
    fields?: string;
    /**
     * Defines how to filter the fetched content items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
     */
    filter?: Array<(string)>;
    /**
     * Whether to request draft content.
     */
    preview?: boolean;
    /**
     * Specifies the number of found content items to skip. Use this to control pagination of the response.
     */
    skip?: number;
    /**
     * Defines how to sort the found content items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
     */
    sort?: Array<(string)>;
    /**
     * URL segment or GUID of a root content item.
     */
    startItem?: string;
    /**
     * Specifies the number of found content items to take. Use this to control pagination of the response.
     */
    take?: number;
};

export type GetContent20Response = PagedIApiContentResponseModel;

export type GetContentItemData = {
    /**
     * Defines the language to return. Use this when querying language variant content items.
     */
    acceptLanguage?: string;
    /**
     * API key specified through configuration to authorize access to the API.
     */
    apiKey?: string;
    /**
     * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
     */
    expand?: string;
    id?: Array<(string)>;
    /**
     * Whether to request draft content.
     */
    preview?: boolean;
    /**
     * URL segment or GUID of a root content item.
     */
    startItem?: string;
};

export type GetContentItemResponse = Array<IApiContentResponseModel>;

export type GetContentItemByPathData = {
    /**
     * Defines the language to return. Use this when querying language variant content items.
     */
    acceptLanguage?: string;
    /**
     * API key specified through configuration to authorize access to the API.
     */
    apiKey?: string;
    /**
     * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
     */
    expand?: string;
    path: string;
    /**
     * Whether to request draft content.
     */
    preview?: boolean;
    /**
     * URL segment or GUID of a root content item.
     */
    startItem?: string;
};

export type GetContentItemByPathResponse = IApiContentResponseModel;

export type GetContentItemByPath20Data = {
    /**
     * Defines the language to return. Use this when querying language variant content items.
     */
    acceptLanguage?: string;
    /**
     * API key specified through configuration to authorize access to the API.
     */
    apiKey?: string;
    /**
     * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
     */
    expand?: string;
    /**
     * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
     */
    fields?: string;
    path: string;
    /**
     * Whether to request draft content.
     */
    preview?: boolean;
    /**
     * URL segment or GUID of a root content item.
     */
    startItem?: string;
};

export type GetContentItemByPath20Response = IApiContentResponseModel;

export type GetContentItemByIdData = {
    /**
     * Defines the language to return. Use this when querying language variant content items.
     */
    acceptLanguage?: string;
    /**
     * API key specified through configuration to authorize access to the API.
     */
    apiKey?: string;
    /**
     * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
     */
    expand?: string;
    id: string;
    /**
     * Whether to request draft content.
     */
    preview?: boolean;
    /**
     * URL segment or GUID of a root content item.
     */
    startItem?: string;
};

export type GetContentItemByIdResponse = IApiContentResponseModel;

export type GetContentItemById20Data = {
    /**
     * Defines the language to return. Use this when querying language variant content items.
     */
    acceptLanguage?: string;
    /**
     * API key specified through configuration to authorize access to the API.
     */
    apiKey?: string;
    /**
     * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
     */
    expand?: string;
    /**
     * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
     */
    fields?: string;
    id: string;
    /**
     * Whether to request draft content.
     */
    preview?: boolean;
    /**
     * URL segment or GUID of a root content item.
     */
    startItem?: string;
};

export type GetContentItemById20Response = IApiContentResponseModel;

export type GetContentItems20Data = {
    /**
     * Defines the language to return. Use this when querying language variant content items.
     */
    acceptLanguage?: string;
    /**
     * API key specified through configuration to authorize access to the API.
     */
    apiKey?: string;
    /**
     * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
     */
    expand?: string;
    /**
     * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
     */
    fields?: string;
    id?: Array<(string)>;
    /**
     * Whether to request draft content.
     */
    preview?: boolean;
    /**
     * URL segment or GUID of a root content item.
     */
    startItem?: string;
};

export type GetContentItems20Response = Array<IApiContentResponseModel>;

export type GetMediaData = {
    /**
     * API key specified through configuration to authorize access to the API.
     */
    apiKey?: string;
    /**
     * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
     */
    expand?: string;
    /**
     * Specifies the media items to fetch. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
     */
    fetch?: string;
    /**
     * Defines how to filter the fetched media items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
     */
    filter?: Array<(string)>;
    /**
     * Specifies the number of found media items to skip. Use this to control pagination of the response.
     */
    skip?: number;
    /**
     * Defines how to sort the found media items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
     */
    sort?: Array<(string)>;
    /**
     * Specifies the number of found media items to take. Use this to control pagination of the response.
     */
    take?: number;
};

export type GetMediaResponse = PagedIApiMediaWithCropsResponseModel;

export type GetMedia20Data = {
    /**
     * API key specified through configuration to authorize access to the API.
     */
    apiKey?: string;
    /**
     * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
     */
    expand?: string;
    /**
     * Specifies the media items to fetch. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
     */
    fetch?: string;
    /**
     * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
     */
    fields?: string;
    /**
     * Defines how to filter the fetched media items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
     */
    filter?: Array<(string)>;
    /**
     * Specifies the number of found media items to skip. Use this to control pagination of the response.
     */
    skip?: number;
    /**
     * Defines how to sort the found media items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
     */
    sort?: Array<(string)>;
    /**
     * Specifies the number of found media items to take. Use this to control pagination of the response.
     */
    take?: number;
};

export type GetMedia20Response = PagedIApiMediaWithCropsResponseModel;

export type GetMediaItemData = {
    /**
     * API key specified through configuration to authorize access to the API.
     */
    apiKey?: string;
    /**
     * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
     */
    expand?: string;
    id?: Array<(string)>;
};

export type GetMediaItemResponse = Array<IApiMediaWithCropsResponseModel>;

export type GetMediaItemByPathData = {
    /**
     * API key specified through configuration to authorize access to the API.
     */
    apiKey?: string;
    /**
     * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
     */
    expand?: string;
    path: string;
};

export type GetMediaItemByPathResponse = IApiMediaWithCropsResponseModel;

export type GetMediaItemByPath20Data = {
    /**
     * API key specified through configuration to authorize access to the API.
     */
    apiKey?: string;
    /**
     * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
     */
    expand?: string;
    /**
     * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
     */
    fields?: string;
    path: string;
};

export type GetMediaItemByPath20Response = IApiMediaWithCropsResponseModel;

export type GetMediaItemByIdData = {
    /**
     * API key specified through configuration to authorize access to the API.
     */
    apiKey?: string;
    /**
     * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
     */
    expand?: string;
    id: string;
};

export type GetMediaItemByIdResponse = IApiMediaWithCropsResponseModel;

export type GetMediaItemById20Data = {
    /**
     * API key specified through configuration to authorize access to the API.
     */
    apiKey?: string;
    /**
     * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
     */
    expand?: string;
    /**
     * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
     */
    fields?: string;
    id: string;
};

export type GetMediaItemById20Response = IApiMediaWithCropsResponseModel;

export type GetMediaItems20Data = {
    /**
     * API key specified through configuration to authorize access to the API.
     */
    apiKey?: string;
    /**
     * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
     */
    expand?: string;
    /**
     * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
     */
    fields?: string;
    id?: Array<(string)>;
};

export type GetMediaItems20Response = Array<IApiMediaWithCropsResponseModel>;

export type $OpenApiTs = {
    '/umbraco/delivery/api/v1/content': {
        get: {
            req: GetContentData;
            res: {
                /**
                 * Success
                 */
                200: PagedIApiContentResponseModel;
                /**
                 * Bad Request
                 */
                400: ProblemDetails | HttpValidationProblemDetails;
                /**
                 * Not Found
                 */
                404: ProblemDetails | HttpValidationProblemDetails;
            };
        };
    };
    '/umbraco/delivery/api/v2/content': {
        get: {
            req: GetContent20Data;
            res: {
                /**
                 * Success
                 */
                200: PagedIApiContentResponseModel;
                /**
                 * Bad Request
                 */
                400: ProblemDetails | HttpValidationProblemDetails;
                /**
                 * Not Found
                 */
                404: ProblemDetails | HttpValidationProblemDetails;
            };
        };
    };
    '/umbraco/delivery/api/v1/content/item': {
        get: {
            req: GetContentItemData;
            res: {
                /**
                 * Success
                 */
                200: Array<IApiContentResponseModel>;
                /**
                 * Unauthorized
                 */
                401: ProblemDetails | HttpValidationProblemDetails;
                /**
                 * Forbidden
                 */
                403: ProblemDetails | HttpValidationProblemDetails;
            };
        };
    };
    '/umbraco/delivery/api/v1/content/item/{path}': {
        get: {
            req: GetContentItemByPathData;
            res: {
                /**
                 * Success
                 */
                200: IApiContentResponseModel;
                /**
                 * Unauthorized
                 */
                401: ProblemDetails | HttpValidationProblemDetails;
                /**
                 * Forbidden
                 */
                403: ProblemDetails | HttpValidationProblemDetails;
                /**
                 * Not Found
                 */
                404: ProblemDetails | HttpValidationProblemDetails;
            };
        };
    };
    '/umbraco/delivery/api/v2/content/item/{path}': {
        get: {
            req: GetContentItemByPath20Data;
            res: {
                /**
                 * Success
                 */
                200: IApiContentResponseModel;
                /**
                 * Unauthorized
                 */
                401: ProblemDetails | HttpValidationProblemDetails;
                /**
                 * Forbidden
                 */
                403: ProblemDetails | HttpValidationProblemDetails;
                /**
                 * Not Found
                 */
                404: ProblemDetails | HttpValidationProblemDetails;
            };
        };
    };
    '/umbraco/delivery/api/v1/content/item/{id}': {
        get: {
            req: GetContentItemByIdData;
            res: {
                /**
                 * Success
                 */
                200: IApiContentResponseModel;
                /**
                 * Unauthorized
                 */
                401: ProblemDetails | HttpValidationProblemDetails;
                /**
                 * Forbidden
                 */
                403: ProblemDetails | HttpValidationProblemDetails;
                /**
                 * Not Found
                 */
                404: ProblemDetails | HttpValidationProblemDetails;
            };
        };
    };
    '/umbraco/delivery/api/v2/content/item/{id}': {
        get: {
            req: GetContentItemById20Data;
            res: {
                /**
                 * Success
                 */
                200: IApiContentResponseModel;
                /**
                 * Unauthorized
                 */
                401: ProblemDetails | HttpValidationProblemDetails;
                /**
                 * Forbidden
                 */
                403: ProblemDetails | HttpValidationProblemDetails;
                /**
                 * Not Found
                 */
                404: ProblemDetails | HttpValidationProblemDetails;
            };
        };
    };
    '/umbraco/delivery/api/v2/content/items': {
        get: {
            req: GetContentItems20Data;
            res: {
                /**
                 * Success
                 */
                200: Array<IApiContentResponseModel>;
                /**
                 * Unauthorized
                 */
                401: ProblemDetails | HttpValidationProblemDetails;
                /**
                 * Forbidden
                 */
                403: ProblemDetails | HttpValidationProblemDetails;
            };
        };
    };
    '/umbraco/delivery/api/v1/media': {
        get: {
            req: GetMediaData;
            res: {
                /**
                 * Success
                 */
                200: PagedIApiMediaWithCropsResponseModel;
                /**
                 * Bad Request
                 */
                400: ProblemDetails | HttpValidationProblemDetails;
            };
        };
    };
    '/umbraco/delivery/api/v2/media': {
        get: {
            req: GetMedia20Data;
            res: {
                /**
                 * Success
                 */
                200: PagedIApiMediaWithCropsResponseModel;
                /**
                 * Bad Request
                 */
                400: ProblemDetails | HttpValidationProblemDetails;
            };
        };
    };
    '/umbraco/delivery/api/v1/media/item': {
        get: {
            req: GetMediaItemData;
            res: {
                /**
                 * Success
                 */
                200: Array<IApiMediaWithCropsResponseModel>;
            };
        };
    };
    '/umbraco/delivery/api/v1/media/item/{path}': {
        get: {
            req: GetMediaItemByPathData;
            res: {
                /**
                 * Success
                 */
                200: IApiMediaWithCropsResponseModel;
                /**
                 * Not Found
                 */
                404: ProblemDetails | HttpValidationProblemDetails;
            };
        };
    };
    '/umbraco/delivery/api/v2/media/item/{path}': {
        get: {
            req: GetMediaItemByPath20Data;
            res: {
                /**
                 * Success
                 */
                200: IApiMediaWithCropsResponseModel;
                /**
                 * Not Found
                 */
                404: ProblemDetails | HttpValidationProblemDetails;
            };
        };
    };
    '/umbraco/delivery/api/v1/media/item/{id}': {
        get: {
            req: GetMediaItemByIdData;
            res: {
                /**
                 * Success
                 */
                200: IApiMediaWithCropsResponseModel;
                /**
                 * Not Found
                 */
                404: ProblemDetails | HttpValidationProblemDetails;
            };
        };
    };
    '/umbraco/delivery/api/v2/media/item/{id}': {
        get: {
            req: GetMediaItemById20Data;
            res: {
                /**
                 * Success
                 */
                200: IApiMediaWithCropsResponseModel;
                /**
                 * Not Found
                 */
                404: ProblemDetails | HttpValidationProblemDetails;
            };
        };
    };
    '/umbraco/delivery/api/v2/media/items': {
        get: {
            req: GetMediaItems20Data;
            res: {
                /**
                 * Success
                 */
                200: Array<IApiMediaWithCropsResponseModel>;
            };
        };
    };
};