'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { MenuProvider } from '@/context/MenuContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/styles.css';
import '@/app/styles/Footer.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin') || false;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,700;1,6..96,400&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="DucknGood - Authentic Lao-Thai cuisine and signature roasted duck in Hickory, NC"
        />
        <title>DucknGood - Authentic Lao-Thai Cuisine</title>
      </head>
      <body>
        <MenuProvider>
          <div className="flex flex-col min-h-screen bg-dark-900 font-sans selection:bg-brand-500 selection:text-white">
            {!isAdminRoute && <Navbar />}
            <main className="flex-grow">{children}</main>
            {!isAdminRoute && (
              <>
                <Footer />
              </>
            )}
          </div>
        </MenuProvider>
      </body>
    </html>
  );
}
