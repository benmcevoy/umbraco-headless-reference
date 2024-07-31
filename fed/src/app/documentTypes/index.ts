import { IApiContentModel } from "@types"
import homePage from './homePage/page'
import oneColumnPage from './oneColumnPage/page'
import documentTypeNotFound from './documentTypeNotFound/page'
import twoColumnPage from './twoColumnPage/page'

const components = new Map();

components.set('_notFound', documentTypeNotFound);
components.set('homePage', homePage);
components.set('oneColumnPage', oneColumnPage);
components.set('twoColumnPage', twoColumnPage);

export default (params: IApiContentModel) =>
    components.has(params.contentType) 
        ? components.get(params.contentType)(params)
        : components.get('_notFound')(params);
