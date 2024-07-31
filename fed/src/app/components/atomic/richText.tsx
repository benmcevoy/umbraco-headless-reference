import { RichTextModel } from "@types"

export function RichText(props: RichTextModel) {
    return (<>
        <div className="prose" dangerouslySetInnerHTML={{ __html: props.markup ?? '' }} />
    </>
    )
}