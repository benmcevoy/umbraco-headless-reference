import { DefaultSearchResult } from "./default"

const components = new Map();

components.set('_default', DefaultSearchResult);

export default (params: any) =>
    components.has(params.contentType)
        ? components.get(params.contentType)(params)
        : components.get('_default')(params);
