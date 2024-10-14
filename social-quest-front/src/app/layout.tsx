import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <NextUIProvider>
                    <main className="light text-foreground bg-background">
                        {children}
                    </main>
                </NextUIProvider>
            </body>
        </html>
    );
}
