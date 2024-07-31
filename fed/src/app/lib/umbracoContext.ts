import { IApiContentModel } from "@/types";
import { cache } from "react";

export interface UmbracoContext {
    path: string;
    searchParams: any;
    umbracoData: IApiContentModel;
    items: Map<string, any>;
}

/**
 * Get Umbraco context for the current request
 * 
 * @remarks 
 * Get the umbraco context for the current request. The context has a per request lifecycle.
 * Use the context.Items Map object to pass data between components if desired.
 * 
 * @returns The Umbraco context 
 */
export function GetUmbracoContext(): UmbracoContext {
    return getRequestContext();
}

const getRequestContext: () => { path: string, searchParams: any, umbracoData: IApiContentModel, items: Map<string, any> }
    = cache(() => ({
        path: null, searchParams: null, umbracoData: null, items: null
    }))