import { IApiContentResponseModel, ApiLinkModel, OpenAPI, getContent20, getContentItemByPath20, HomePageContentModel } from "@types"

export interface NavigationItem {
    href: string;
    label: any;
    isExternal?: boolean 
}

function ToLinkFromPage(link: IApiContentResponseModel) : NavigationItem {
    return {
        href: link.route.path,
        label: link.properties.title,
    };
}

function ToLinkFromLink(link: ApiLinkModel): NavigationItem  {
    // TODO: media and querystring etc
    switch (link.linkType) {
        case 'Content':
        case 'Media':
            return { href: link.route.path, label: link.title};
        case 'External':
            return { href: link.url, label: link.title, isExternal: true };
    }
}

export async function GetPrimaryMenu(pathOrId: string = "/") : Promise<NavigationItem[]>  {
    OpenAPI.BASE = process.env.UMBRACO_DOMAIN;

    const result = await getContent20({
        fetch: `children:${pathOrId}`,
        fields: 'properties[title]',
        filter: ['hideFromNavigation:0'],
        apiKey: process.env.UMBRACO_API_KEY
    });

    const projection = result.items.map((x, i) => { return ToLinkFromPage(x) });

    return projection;
}

export async function GetFooter() : Promise<NavigationItem[]> {
    OpenAPI.BASE = process.env.UMBRACO_DOMAIN;

    const result = await getContentItemByPath20(
        {
            path: '/',
            apiKey: process.env.UMBRACO_API_KEY
        }
    ) as HomePageContentModel;

    const links = result.properties.footerLinks;
    const projection = links.map((x, i) => { return ToLinkFromLink(x) });

    return projection;
}

export async function GetBreadCrumb(path) {
    OpenAPI.BASE = process.env.UMBRACO_DOMAIN;

    const result = await getContent20({
        fetch: `ancestors:${path}`,
        fields: 'properties[title]',
        filter: ['hideFromNavigation:0'],
        sort: ['level:asc'],
        apiKey: process.env.UMBRACO_API_KEY
    });

    const projection = result.items.map((x, i) => { return ToLinkFromPage(x) });

    return projection;
}