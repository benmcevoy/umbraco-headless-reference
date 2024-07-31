import { ApiBlockItemModel, ApiBlockListModel } from "@types";
import { default as elements } from "./elements";

export function BlockList(props: ApiBlockListModel) {
    const components = (props?.items ?? []).map((element: ApiBlockItemModel, i: number) => {
        return <div key={element.content.id}>
            {elements(element)}
        </div>
    });

    return (
        <section>
            {components}
        </section>
    );
}