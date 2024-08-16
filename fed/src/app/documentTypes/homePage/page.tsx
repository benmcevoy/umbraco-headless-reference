import { HomePageContentModel } from "@types"
import { PageHeader } from "@components"
import { Footer, Header } from "@components/navigation";

export default function HomePage(pageModel: HomePageContentModel) {
    return (
        <div className="relative flex flex-col h-screen">
            <header className='py-6'>
                <Header hideBreadCrumb={true} />
            </header>
            <main className="container mx-auto max-w-7xl pt-10 px-6">
                <PageHeader model={pageModel.properties} />
            </main>
            <footer className="w-full flex items-center justify-center py-3">
                <Footer />
            </footer>
        </div>
    );
}
