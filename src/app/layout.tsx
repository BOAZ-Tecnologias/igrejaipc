import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Footer } from '@/components/HomePage/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "I'm Church",
  description: '...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(inter.className, 'min-h-screen max-w-screen')}>
        <Header />
        <div className='flex flex-col w-full h-full px-6 md:px-[9rem]'>
          {children}
        </div>
        <Toaster />
        <footer className='w-full px-0 py-0'>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
