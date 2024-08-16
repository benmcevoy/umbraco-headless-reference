import { ContentPropertiesModel } from "@types";
import { RichText, Title } from "./atomic";
import { ReactNode } from "react";

export function PageHeader({ model, afterTitle }: { model: ContentPropertiesModel, afterTitle?: ReactNode }) {

    return (
        <section className="pb-10">
            <Title {...model} />
            <div className="mx-auto max-w-7xl px-6" >
                {afterTitle}
            </div>
            <RichText {...model.main ?? ''} />
        </section>
    );
}