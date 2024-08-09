//import { TwoColumnPageContentModel } from "@types"
import { PageHeader } from "@components";
import { Footer, Header } from "@components/navigation";
import * as Search from "@components/search";

export default function SearchPage(params: any) {
    return (
        <div className="relative flex flex-col h-screen">
            <header className='py-6'>
                <Header />
            </header>
            <section className="container mx-auto max-w-7xl pt-10 px-6">
                <PageHeader {...params} />
            </section>
            <section className="grid grid-cols-12 container mx-auto max-w-7xl pt-10 px-6">
                <aside className="col-span-full md:col-span-4">
                    <Search.Tags {...params.properties.aside} />
                </aside>
                <main className="col-span-full md:col-span-8">
                    <Search.Options {...params} />
                    <Search.Results {...params} />
                    <Search.Pagination {...params} />
                </main>
            </section>
            <footer className="w-full flex items-center justify-center py-3 flex-grow">
                <Footer />
            </footer>
        </div>
    );
}


