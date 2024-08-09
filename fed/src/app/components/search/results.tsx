import { SearchResults } from "@/client/search";
import { default as result } from "./searchResult"

export function Results(results: SearchResults) {

    // foreach map or something
    return (
        <>
            {result(results.results[0])}
        </>
    );
}

