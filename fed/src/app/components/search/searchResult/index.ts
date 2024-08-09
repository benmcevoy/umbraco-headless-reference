import { SearchResult } from "@/client/search"
import { DefaultSearchResult } from "./default"

const components = new Map();

components.set('_default', DefaultSearchResult);

export default (params: SearchResult) =>
    components.has(params.contentType)
        ? components.get(params.contentType)(params)
        : components.get('_default')(params);
