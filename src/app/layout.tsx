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
      <head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#0ea5e9' />

        <meta
          property='og:image'
          content='/favicon/android-chrome-512x512.png'
        />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='200' />
        <meta property='og:image:height' content='200' />
        <meta
          property='og:image:secure_url'
          content='/favicon/android-chrome-512x512.png'
        />
        <meta name='author' content='Adonia Wubie' />

        <meta
          name='description'
          content='Probuild Trading PLC is a premier provider of construction chemicals and waterproofing solutions in Ethiopia. We are committed to excellence and innovation, delivering high-quality products and services to meet the diverse needs of our clients.'
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
