import {useEffect, useRef, useState} from "react";
import Image from "next/image";

export default function Footer() {
    const birdRef = useRef<HTMLImageElement>(null);
    const [birdStyle, setBirdStyle] = useState({top: -41, right: 60});
    const [isFlying, setIsFlying] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (isFlying) return;

            const bird = birdRef.current;
            if (!bird) return;

            const rect = bird.getBoundingClientRect();
            const dx = e.clientX - (rect.left + rect.width / 2);
            const dy = e.clientY - (rect.top + rect.height / 2);
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                setIsFlying(true);

                setBirdStyle({
                    right: 160,
                    top: -241
                });

                setTimeout(() => {
                    setBirdStyle({
                        right: 220,
                        top: -41
                    });
                }, 500);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [isFlying]);

    return (
        <footer
            className="relative mx-auto mt-0 md:mt-[80px] mb-0 md:mb-[20px] max-w-5xl h-[65px] bg-white rounded-none md:rounded-full border-2 border-[#333333] px-6 flex justify-between items-center">
            <div className="flex items-center gap-6">
                <Image
                    src="/corev-logo.svg"
                    alt="Corev logo"
                    width={120}
                    height={32}
                    priority
                />
                <nav className="hidden md:flex items-center space-x-4 text-[#333333] text-[14px]">
                    <a href="#" className="font-bold">Home</a>
                    <Image src="/slash-icon.svg" alt="/" width={24} height={24}/>
                    <a href="https://doguabaris.github.io/corev-cli-docs/" target="_blank"
                       className="hover:underline">Docs</a>
                    <Image src="/slash-icon.svg" alt="/" width={24} height={24}/>
                    <a href="https://www.npmjs.com/package/@corev/cli" target="_blank"
                       className="hover:underline">NPM</a>
                </nav>
            </div>
            <div className="text-[12px] text-[#333333] text-center">
                © 2025 — Corev CLI is open-source software licensed under the MIT License.
            </div>
            <div className="flex items-center gap-4">
                <a href="https://github.com/doguabaris/corev-cli" target="_blank" rel="noopener noreferrer">
                    <Image src="/github-icon.svg" alt="GitHub" width={34} height={34}/>
                </a>
            </div>
            <Image
                ref={birdRef}
                src="/bird-icon.svg"
                alt="Bird icon"
                width={42}
                height={42}
                className={isFlying ? "animate-flap" : ""}
                style={{
                    position: 'absolute',
                    right: `${birdStyle.right}px`,
                    top: `${birdStyle.top}px`,
                    transition: 'top 3.6s ease, right 1.6s ease',
                }}
            />
        </footer>
    );
}
