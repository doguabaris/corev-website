import Image from "next/image";

export default function Header() {
    const handleScroll = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({behavior: "smooth", block: "start"});
        }
    };

    return (
        <header
            className="mx-auto mt-0 md:mt-[20px] max-w-5xl h-[83px] bg-[#ffffff] rounded-none md:rounded-full border-2 border-[#333333] px-6 flex justify-between items-center">
            <Image
                src="/corev-logo.svg"
                alt="Corev logo"
                width={100}
                height={32}
                priority
            />
            <nav className="hidden md:flex items-center space-x-4 text-[#333333] text-[18px]">
                <a href="#" className="font-bold">Home</a>
                <Image src="/slash-icon.svg" alt="/" width={32} height={32}/>
                <a href="#" onClick={handleScroll("tools")} className="hover:underline">Tools</a>
                <Image src="/slash-icon.svg" alt="/" width={32} height={32}/>
                <a href="#" onClick={handleScroll("contribute")} className="hover:underline">Contribute</a>
                <Image src="/slash-icon.svg" alt="/" width={32} height={32}/>
                <a href="https://doguabaris.github.io/corev-cli-docs/" target="_blank"
                   className="hover:underline">Docs</a>
            </nav>
            <div className="flex gap-4 items-center">
                <a href="https://www.producthunt.com/products/corev-cli" target="_blank" rel="noopener noreferrer">
                    <Image src="/producthunt-icon.svg" alt="Product Hunt" width={34} height={34}/>
                </a>
                <a href="https://github.com/doguabaris/corev-cli" target="_blank" rel="noopener noreferrer">
                    <Image src="/github-icon.svg" alt="GitHub" width={34} height={34}/>
                </a>
            </div>
        </header>
    );
}
