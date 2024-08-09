import { SearchResult } from "@/client/search";
import { DebugJson } from "@/components/debug-json-api";

export function DefaultSearchResult(props: SearchResult) {

    return (<>
        <div>// TODO: default search result</div>
        <DebugJson data={props} />
    </>);

}