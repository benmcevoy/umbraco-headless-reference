import { SearchResult } from "@/client/search";
import { Tags } from "@/components/navigation";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export function DefaultSearchResult({ item, index }: { item: SearchResult, index: number }) {
    return (<>
        <div className="pb-4" key={index}>
            <Card className="">
                <a href={item.url}>
                    <CardHeader className="block">
                        <h4 className="font-medium text-large">{item.title}</h4>
                        <p className="text-black/60 text-tiny uppercase font-bold">{item.contentTypeDisplay}</p>
                    </CardHeader>

                    <CardBody>
                        <p>{item.summary}</p>

                    </CardBody>
                </a>
                <CardFooter>
                    <Tags tags={item.tags} />
                </CardFooter>
            </Card>
        </div>
    </>);
}