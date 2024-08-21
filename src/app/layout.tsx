import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/HomePage/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Igreja IPC",
  description:
    "Bem-vindo ao site da Igreja Palavras que Curam (IPC), onde a fé encontra expressão, a comunidade se reúne e as vidas são transformadas! Descubra nossos cultos vibrantes, ministérios ativos e eventos inspiradores. Junte-se a uma comunidade acolhedora, onde todos são bem-vindos a explorar e crescer em sua jornada espiritual. Encontre recursos edificantes, informações sobre nossos serviços e formas de se envolver. Venha como você é e embarque conosco nesta emocionante jornada de fé e amor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "flex flex-col min-h-screen max-w-screen"
        )}
      >
        <Toaster />
        <Header />
        <div className="flex flex-col w-full h-full px-[1rem] md:px-[20rem]">
          {children}
        </div>
        <footer className="w-full px-0 py-0">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
