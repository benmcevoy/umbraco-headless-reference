import { SearchPageContentModel } from "@types"
import { GetUmbracoContext } from "@/lib/umbracoContext";
import { PageHeader } from "@components";
import { Footer, Header } from "@components/navigation";
import * as Search from "@components/search";
import { getV1Search, OpenAPI, GetV1SearchData } from "@/client/search"

export default async function SearchPage(pageModel: SearchPageContentModel) {
    // TODO: call search service with 
    // i think that will be OK

    const context = GetUmbracoContext();

context.searchParams

    OpenAPI.BASE = process.env.UMBRACO_DOMAIN;

    const options: GetV1SearchData = {
        pageNumber: 1,
        pageSize: 10,
        query: "lorem",
        sort: null,
        tags: []
    };

    const results = await getV1Search(options);

    return (
        <div className="relative flex flex-col h-screen">
            <header className='py-6'>
                <Header />
            </header>
            <section className="container mx-auto max-w-7xl pt-10 px-6">
                <PageHeader {...pageModel} />
            </section>
            <section className="grid grid-cols-12 container mx-auto max-w-7xl pt-10 px-6">
                <aside className="col-span-full md:col-span-4">
                    <Search.Tags {...options} />
                </aside>
                <main className="col-span-full md:col-span-8">
                    <Search.Options {...options} />
                    <Search.Results {...results} />
                    <Search.Pagination 
                            pageNumber={options.pageNumber} 
                            pageSize={options.pageSize} 
                            totalResult={results.total} />
                </main>
            </section>
            <footer className="w-full flex items-center justify-center py-3 flex-grow">
                <Footer />
            </footer>
        </div>
    );
}


