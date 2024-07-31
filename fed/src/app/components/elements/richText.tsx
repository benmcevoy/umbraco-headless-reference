import { RichTextPropertiesModel } from "@types"
import { RichText as Text } from "@components/atomic"

export default function RichText(props: RichTextPropertiesModel) {
    return (<>
        <Text {...props.text} />
    </>
    )
}