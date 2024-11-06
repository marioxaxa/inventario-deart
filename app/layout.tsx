import type { Metadata } from "next";
import "./globals.css";
import { CssBaseline } from "@mui/material";
import ThemeContext from "@/context/ThemeContext";

export const metadata: Metadata = {
    title: "Inventario Deart",
    description: "Sistema de inventário online criado para/pelo Deart",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body>
                <ThemeContext>
                    <>
                        <CssBaseline />
                        {children}
                    </>
                </ThemeContext>
            </body>
        </html>
    );
}
