import { SearchResults } from "@/client/search";
import {Divider} from "@nextui-org/divider";

export function Options(props: SearchResults){
    return (<>
    <div>
Search for '{props.queryOptions.query}' found {props.total} results.
    </div>
    <Divider className="my-4" />
    </>);
}