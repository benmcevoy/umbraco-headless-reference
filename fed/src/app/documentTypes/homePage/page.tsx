import { HomePageContentModel } from "@types"
import { RichText, Title } from "@components/atomic"
import { Footer, Header } from "@components/navigation";

export default function HomePage(pageModel: HomePageContentModel) {
    const props = pageModel.properties;

    return (
        <div className="relative flex flex-col h-screen">
            <header className='py-6'>
                <Header />
            </header>
            <main className="container mx-auto max-w-7xl pt-10 px-6">
                <Title {...props} />
                <RichText {...props.main} />
            </main>
            <footer className="w-full flex items-center justify-center py-3">
                <Footer />
            </footer>
        </div>
    );
}


