import { BasePagePropertiesModel } from "@/types";

export function Title(props: BasePagePropertiesModel) {
    return (
        <div>
            <h1 className="tracking-tight inline font-semibold text-[2.3rem] lg:text-5xl leading-9">{props.title}</h1>
        </div>);
}