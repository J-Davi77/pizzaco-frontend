import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Pizzaco",
    description: "App de pizzaria para gerenciar pedidos e cardápio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="pt-BR"
            className={`${montserrat.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}