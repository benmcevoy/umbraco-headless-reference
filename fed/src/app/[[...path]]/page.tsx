import { OpenAPI, getContentItemByPath20, IApiContentModel } from "@types"
import { notFound } from 'next/navigation'
import { default as documentTypes } from "@/documentTypes";
import { GetUmbracoContext } from "@/lib/umbracoContext";
import { DebugJson } from "@components/debug-json-api";

export const metadata: Record<string, any> = {};

export default async function Page({ params, searchParams }: { params: { path: string[] }, searchParams: any }) {
    OpenAPI.BASE = process.env.UMBRACO_DOMAIN;

    const pathOrId = params.path || '';
    const path = typeof pathOrId == "string" ? pathOrId : pathOrId.join('/');

    try {
        const data = await getContentItemByPath20(
            {
                apiKey: process.env.UMBRACO_API_KEY,
                path: path,
            });

        const context = GetUmbracoContext();
        context.path = path;
        context.searchParams = searchParams;
        context.umbracoData = data;

        metadata.title = data.properties?.title;
        metadata.keywords = data.properties?.keywords;

        return (
            <>
                {documentTypes(data as IApiContentModel)}
                <DebugJson label="Umbraco Context:" data={context} />
            </>
        );

    } catch (e) {
        console.error(e);
        return notFound();
    }
}
