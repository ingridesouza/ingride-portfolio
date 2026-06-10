import type { Metadata } from "next";
import { Inter, Fira_Code, Syne } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  weight: ["300", "400", "500"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ingride Souza — Backend Developer & AI Engineer",
  description:
    "Portfolio de Ingride Souza — Desenvolvedora Backend especializada em Python, Django, APIs REST, Docker e IA aplicada. Salvador, Brasil.",
  keywords: [
    "Backend Developer",
    "AI Engineer",
    "Python",
    "Django",
    "FastAPI",
    "Machine Learning",
    "Software Developer",
    "Salvador",
    "Brasil",
  ],
  authors: [{ name: "Ingride Souza", url: "https://github.com/ingridesouza" }],
  openGraph: {
    title: "Ingride Souza — Backend Developer & AI Engineer",
    description: "Portfolio de Ingride Souza — APIs, IA aplicada e sistemas escaláveis.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ingride Souza — Backend Developer & AI Engineer",
    description: "Portfolio de Ingride Souza — APIs, IA aplicada e sistemas escaláveis.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${firaCode.variable} ${syne.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
