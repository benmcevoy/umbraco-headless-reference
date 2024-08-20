export const dynamic = 'force-dynamic'

import { SearchPageContentModel } from "@types"
import { GetUmbracoContext } from "@/lib/umbracoContext";
import { PageHeader } from "@components";
import { Footer, Header } from "@components/navigation";
import * as Search from "@components/search";
import { getV1Search, OpenAPI, GetV1SearchData } from "@/client/search"

export default async function SearchPage(pageModel: SearchPageContentModel) {
    OpenAPI.BASE = process.env.UMBRACO_DOMAIN;

    const context = GetUmbracoContext();

    const options: GetV1SearchData = {
        pageNumber: context.searchParams?.pageNumber ?? 1,
        pageSize: 5,
        query: context.searchParams?.query ?? '',
        sort: null,
        tags: context.searchParams?.tags 
    };

    const results = await getV1Search(options);

    return (
        <div className="relative flex flex-col h-screen">
            <header className='py-6'>
                <Header />
            </header>
            <section className="container mx-auto max-w-7xl pt-10 px-6">
                <PageHeader model={pageModel.properties} />
            </section>
            <section className="grid grid-cols-12 container mx-auto max-w-7xl pt-10 px-6">
                <aside className="col-span-full md:col-span-4">
                    <Search.Tags {...results} />
                </aside>
                <main className="col-span-full md:col-span-8">
                    <Search.Options {...results} />
                    <Search.Results {...results} />
                    <Search.Pagination {...results} />
                </main>
            </section>
            <footer className="w-full flex items-center justify-center py-3 flex-grow">
                <Footer />
            </footer>
        </div>
    );
}


