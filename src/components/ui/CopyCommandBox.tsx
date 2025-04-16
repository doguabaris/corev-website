'use client';

import {useEffect, useState} from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function CopyCommandBox() {
    const [copied, setCopied] = useState(false);
    const [mounted, setMounted] = useState(false);

    const command = "npm i -g @corev/cli";

    const handleCopy = () => {
        navigator.clipboard.writeText(command).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        });
    };

    useEffect(() => {
        const timeout = setTimeout(() => setMounted(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div
            className={`flex items-center justify-between border-2 border-[#333333] bg-white px-6 py-[14px] rounded-full w-max sm:w-[400px] h-[65px] transition-all duration-700 ease-out transform ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
            <div className="flex items-center gap-2">
                <Image src="/cli-icon.svg" alt="Prompt icon" width={24} height={24}/>
                <code className="text-[18px] font-medium text-[#333333]">
                    <span className="text-[#59EBA2] font-bold mr-1"></span>{command}
                </code>
            </div>
            <div className="relative group">
                <Button
                    onClick={handleCopy}
                    icon={copied ? "/check-icon.svg" : "/copy-icon.svg"}
                    iconAlt={copied ? "Copied!" : "Copy"}
                    iconOnly
                    iconSize={24}
                    hideBorder
                    bgColor="bg-transparent"
                    hoverColor="hover:bg-gray-100"
                />
                <span
                    className="absolute -top-8 right-1 text-xs px-2 py-1 bg-[#333333] text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {copied ? "Copied!" : "Copy"}
                </span>
            </div>
        </div>
    );
}
