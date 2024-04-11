import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { cn } from '@/lib/utils';

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
      <body className={cn(inter.className, 'min-h-screen max-w-screen pb-10')}>
        <Header />
        <div className='flex flex-col w-full h-full px-[9rem]'>{children}</div>
      </body>
    </html>
  );
}
