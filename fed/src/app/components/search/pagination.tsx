import { Pagination as NextPagination } from "@nextui-org/pagination";

export function Pagination({ pageNumber, pageSize, totalResult }: { pageNumber: number, pageSize: number, totalResult: number }) {

    const numberPages = Math.ceil(totalResult / pageSize);

    return (<>
        <NextPagination showControls total={numberPages} page={pageNumber} />
    </>);
}