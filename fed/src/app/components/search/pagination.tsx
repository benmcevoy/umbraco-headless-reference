"use client"

import { SearchResults } from "@/client/search";
import { Pagination as NextPagination } from "@nextui-org/pagination";
import { useRef } from "react";

export function Pagination(props: SearchResults) {
    const formRef = useRef(null);
    const pageNumberRef = useRef(null);
    const numberPages = Math.ceil(props.total / props.queryOptions.pageSize);
    const onChangePage = (page: number) => {  
        pageNumberRef.current.value = page;
        formRef.current.submit();
    };

    console.log(props.queryOptions)

    return (<>
        <form action='/search' ref={formRef}>
            <input type='hidden' name='query' value={props.queryOptions.query} />
            <input type='hidden' name='tags' value={props.queryOptions.tags} />
            <input type='hidden' name='pageNumber' value='' ref={pageNumberRef} />
            <NextPagination onChange={onChangePage} showControls total={numberPages} page={props.queryOptions.pageNumber} />
        </form>
    </>);
}