import { SearchResults } from "@/client/search";
import { default as searchResultItem } from "./searchResult"

export function Results(results: SearchResults) {
    return (<div className="">
        {results.results?.map((item, index) => searchResultItem(item, index ))}
    </div>);
}