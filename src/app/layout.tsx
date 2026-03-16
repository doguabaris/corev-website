import type {Metadata} from "next";
import {Quicksand} from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Corev - Configs, Under Control.",
    description:
        "A minimal, open-source CLI tool for managing dynamic configuration repositories, with a focus on JSON files, on a per-project basis.",
    keywords: [
        "Corev",
        "dynamic configuration",
        "configuration management",
        "versioned config",
        "CLI tool",
        "DevOps",
        "infrastructure as code",
        "JSON schema",
        "distributed systems",
        "config CLI"
    ],
    openGraph: {
        title: "Corev - Configs, Under Control.",
        description:
            "A minimal, open-source CLI tool for managing dynamic configuration repositories, with a focus on JSON files, on a per-project basis.",
        url: "https://corev.dev",
        siteName: "Corev",
        images: [
            {
                url: "https://corev.dev/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Corev - Manage configs without the overhead",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Corev - Configs, Under Control.",
        description:
            "A minimal, open-source CLI tool for managing dynamic configuration repositories, with a focus on JSON files, on a per-project basis.",
        images: ["https://corev.dev/og-image.jpg"],
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${quicksand.variable} ${quicksand.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
