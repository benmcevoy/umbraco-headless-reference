import { IApiContentModel } from "@types";
import { RichText, Title } from "./atomic";
import { Tags } from "./navigation";

export function PageHeader(props: IApiContentModel) {

    console.log(props)
    return (
        <section>
            <Title {...props.properties} />
            <div className="mx-auto max-w-7xl px-6" >
                <Tags tags={props.properties.tags} />
            </div>
            <RichText {...props.properties.body ?? ''} />
        </section>
    );
}