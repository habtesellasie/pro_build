import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Probuild',
  description:
    'Probuild Trading PLC has established itself as a leading provider of construction chemicals and waterproofing solutions in Ethiopia. Our commitment to excellence and innovation has enabled us to deliver high-quality products and services that meet the diverse needs of our clients.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
