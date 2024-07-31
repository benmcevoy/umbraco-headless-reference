import { ApiBlockItemModel } from "@types"
import elementNotFound from './elementNotFound'
import callToAction from './callToAction'
import richText from './richText'

const components = new Map();

components.set('_notFound', elementNotFound);
components.set('callToAction', callToAction);
components.set('richText', richText);

export default (params: ApiBlockItemModel) =>
    components.has(params.content.contentType)
        ? components.get(params.content.contentType)(params.content.properties)
        : components.get('_notFound')(params.content.properties);
