import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AppProvider from '@/context/AppContext';
import { ReactQuery } from '@/Providers/QueryProvider';
import { Toaster } from '@/components/ui/toaster';
import NextProgressBar from '@/Providers/NextProgressBar';
import { siteConfig } from '@/config/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "buy used cars Nigeria ***",
    "Buying and selling cars in Nigeria ***",
    "car history ***",
    "Cars for sale *",
    "Used cars for sale ***",
    "Used cars***",
    "Sell car***",
    "trucks for sale ***",
    "Cheap cars for sale ***",
    "Lexus es 350 *",
    "Car buying sites ***",
    "car history check ***",
    "cheap used cars ***",
    "Lexus es 350 in nigeria ***",
    "car loan ***",
    "Auto loan in Nigeria ***",
    "Car loan in Nigeria ***",
    "car finance in Nigeria ***",
    "Auto loan ***",
    "Autoloan ***",
    "360 car view ***",
    " Vehicle 360 view ***",
    "Cars 360 ***",
    "Lexus es 350 for sale ***",
    " Es350 ***",
    " lexus ex350",
  ],
  authors: [
    {
      name: "Autobuy",
      url: "https://autobuyng.netlify.app/",
    },
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  creator: "Autobuy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "Autobuy",
  },

  // manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextProgressBar>
          <ReactQuery>
            <AppProvider>
              {children}
              <Toaster />
            </AppProvider>
          </ReactQuery>
        </NextProgressBar>
      </body>
    </html>
  );
}
