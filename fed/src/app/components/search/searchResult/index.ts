import { SearchResult } from "@/client/search"
import { DefaultSearchResult } from "./default"

const components = new Map();

components.set('_default', DefaultSearchResult);

export default (item: SearchResult, index: number) =>
    components.has(item.contentType)
        ? components.get(item.contentType)({ item, index })
        : components.get('_default')({ item, index });
