import {useEffect, useState} from "react";
import Image from "next/image";

interface SectionTitleProps {
    text: string;
}

export default function SectionTitle({text}: SectionTitleProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="flex items-center gap-4 max-w-5xl mx-auto mt-[60px] px-6">
            <Image
                src="/cli-icon.svg"
                alt="Section icon"
                width={58.69}
                height={51.34}
            />
            <h2
                className={`text-[36px] font-semibold text-[#333333] transform transition-all duration-700 ease-out ${
                    visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                }`}
            >
                {text}
            </h2>
        </div>
    );
}
