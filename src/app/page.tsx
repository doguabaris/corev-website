'use client';

import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Image from "next/image";
import CopyCommandBox from "@/components/ui/CopyCommandBox";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import {useEffect, useState} from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setMounted(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <div className="min-h-screen bg-[#f4faff] text-[#333333] font-sans ">
                <Header/>
                <section className="max-w-5xl mx-auto mt-[60px] px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-6">
                    <h1 className="text-[42px] leading-tight font-semibold text-[#333333]">
                                Manage configs <br/>
                                <AnimatedHeading/>
                            </h1>
                            <p className="text-[#333333] text-[24px] leading-relaxed max-w-md">
                                It helps you manage versioned configuration repositories on <br/> a per-project basis.
                            </p>
                            <Button
                                as="a"
                                href="https://doguabaris.github.io/corev-cli-docs/"
                                target="_blank"
                                rel="noopener noreferrer"
                                bgColor="bg-[#AEFFDE]"
                                height="h-[42px]"
                                icon="/arrow-right.svg"
                                iconPosition="right"
                            >
                                Read the docs
                            </Button>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <div className="flex justify-center md:justify-end">
                                <Image
                                    src="/hero-illustration.svg"
                                    alt="Hero Illustration"
                                    width={400}
                                    height={400}
                                    priority
                                    className={`transition-all duration-700 ease-out transform ${
                                        mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
                                    }`}
                                />
                            </div>
                        </div>
                    </section>
                    <SectionTitle text="Get started"/>
                    <section
                        className="max-w-5xl mx-auto gap-10 mt-8 px-6 grid grid-cols-1 md:grid-cols-[auto_1fr] items-baseline">
                        <div className="space-y-10 items-center text-center sm:items-start sm:text-left flex flex-col">
                            <p className="text-[26px] leading-relaxed text-[#333333]">
                                Start managing your <br/> versioned configs in seconds.
                            </p>
                            <CopyCommandBox/>
                        </div>
                        <div
                            className={`hidden md:block bg-white border-2 border-[#333333] rounded-[20px] w-[550px] transition-all duration-700 ease-out transform ${
                                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            }`}
                        >
                            <div className="flex space-x-2 mb-4 border-b-2 border-[#333333] px-6 pt-4 pb-5">
                                <span className="w-4 h-4 rounded-full bg-[#C2F8D0]"/>
                                <span className="w-4 h-4 rounded-full bg-[#E3F1FF]"/>
                                <span className="w-4 h-4 rounded-full bg-[#D9D9D9]"/>
                            </div>
                            <div className="font-mono text-[14px] space-y-[4px] text-[#333333] leading-snug px-6 pb-8">
                                <p><span className="text-gray-400">~</span></p>
                                <p><span className="text-[#50B37A]">corev</span> pull atlas</p>
                                <p><span className="text-[#333333]">⫶</span> Fetching config for &#34;atlas&#34; <a
                                    href="http://localhost:3000" className="text-[#3C82F6]">http://localhost:3000</a>
                                </p>
                                <p><span className="text-[#50B37A]">→</span> Config saved for <span
                                    className="text-[#3C82F6]">atlas</span> version <span
                                    className="text-[#50B37A]">1.0.0</span></p>
                            </div>
                        </div>
                    </section>
                    <SectionTitle text="Tools"/>
                    <section id="tools"
                             className="max-w-5xl mx-auto mt-8 px-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        <div
                            className="bg-white hover:bg-[#e4f1ff] border-2 border-[#333333] rounded-[30px] p-6 flex flex-col justify-between h-[260px] transition-all duration-200 hover:-translate-y-[10px]">

                            <Image src="/corev-cli-logo.svg" alt="Corev CLI" width={160} height={40} className="mb-6"/>
                            <p className={"text-[14px] space-y-[4px] text-[#333333]"}>A minimal, open-source CLI tool
                                for
                                managing dynamic configuration repositories, with a focus on JSON files, on a
                                per-project
                                basis.</p>
                            <div className="flex items-center gap-3">
                                <Button
                                    as="a"
                                    href="https://github.com/doguabaris/corev-cli"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    icon="/source-icon.svg"
                                    iconPosition="left"
                                    bgColor="bg-[#AEFFDE]"
                                >
                                    Source code
                                </Button>

                                <Button
                                    icon="/docs-icon.svg"
                                    iconPosition="left"
                                    as="a"
                                    href="https://doguabaris.github.io/corev-cli-docs/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Docs
                                </Button>
                                <Image src="/info-icon.svg" alt="Info" width={18} height={18} className="ml-auto"/>
                            </div>
                        </div>
                        <div
                            className="bg-white border-2 border-[#D9D9D9] rounded-[30px] p-6 flex flex-col justify-center items-center h-[260px] text-[#D9D9D9]">
                            <Image src="/corev-host-logo.svg" alt="Corev Host" width={160} height={40}
                                   className="mb-4"/>
                            <p className="text-lg">Coming soon :)</p>
                        </div>
                    </section>
                    <SectionTitle text="Contribute"/>
                    <section id="contribute"
                             className="max-w-5xl mx-auto mb-[100px] px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                        <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-6">
                        <p className="text-[#333333] text-[24px] leading-relaxed max-w-md">
                                Whether you want to fix a bug, suggest a feature, improve documentation, or just try it
                                out
                                and
                                give feedback — your help is welcome.
                            </p>
                            <Button
                                as="a"
                                href="https://github.com/doguabaris/corev-cli/blob/main/CONTRIBUTING.md"
                                target="_blank"
                                rel="noopener noreferrer"
                                height="h-[42px]"
                                icon="/arrow-right.svg"
                                iconPosition="right"
                            >
                                Read the contributing guide
                            </Button>

                        </div>
                        <div className="flex justify-center md:justify-end">
                            <Image
                                src="/contribute-illustration.svg"
                                alt="Hero Illustration"
                                width={400}
                                height={400}
                                priority/>
                        </div>
                    </section>
                <Footer/>
            </div>
        </>
    );
}
