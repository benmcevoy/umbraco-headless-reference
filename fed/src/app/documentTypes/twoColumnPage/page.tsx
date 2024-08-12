import { TwoColumnPageContentModel } from "@types"
import { Footer, Header } from "@components/navigation";
import { PageHeader, BlockList } from "@components";

export default function TwoColumnPage(pageModel: TwoColumnPageContentModel) {
    return (
        <div className="relative flex flex-col h-screen">
            <header className='py-6'>
                <Header />
            </header>
            <section className="grid grid-cols-12 container mx-auto max-w-7xl pt-10 px-6">
                <main className="col-span-full md:col-span-8">
                    <PageHeader {...pageModel} />
                </main>
                <aside className="col-span-full md:col-span-4">
                    <BlockList {...pageModel.properties.aside} />
                </aside>
            </section>
            <footer className="w-full flex items-center justify-center py-3 flex-grow">
                <Footer />
            </footer>
        </div>
    );
}


