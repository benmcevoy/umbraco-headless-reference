import { OneColumnPageContentModel } from "@types"
import { Footer, Header } from "@components/navigation";
import { PageHeader, BlockList } from "@components";

export default async function OneColumnPage(params: OneColumnPageContentModel) {
    return (
        <div className="relative flex flex-col h-screen">
            <header className='py-6'>
                <Header />
            </header>
            <main className="container mx-auto max-w-7xl pt-10 px-6 flex-grow">
                <div>
                    <PageHeader {...params} />
                    <BlockList {...params.properties.components} />
                </div>
            </main>
            <footer className="w-full flex items-center justify-center py-3">
                <Footer />
            </footer>
        </div>);
}


