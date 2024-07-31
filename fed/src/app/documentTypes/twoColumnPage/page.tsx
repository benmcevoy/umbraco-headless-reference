import { TwoColumnPageContentModel } from "@types"
import { Footer, Header } from "@components/navigation";
import { PageHeader, BlockList } from "@components";

export default async function TwoColumnPage(params: TwoColumnPageContentModel) {

    return (
        <div className="relative flex flex-col h-screen">
            <header className='py-6'>
                <Header />
            </header>
            <main className="container mx-auto max-w-7xl pt-10 px-6 flex-grow">
                <div>
                    <PageHeader {...params} />

                </div>
            </main>
            <aside>
                <BlockList {...params.properties.aside} />
            </aside>
            <footer className="w-full flex items-center justify-center py-3">
                <Footer />
            </footer>
        </div>
    );
}


