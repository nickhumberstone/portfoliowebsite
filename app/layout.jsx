import React from 'react';
import { Roboto } from 'next/font/google';
import './globals.css';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  preload: true,
});

export const metadata = {
  title: 'Nick Humberstone - Software Engineer',
  description: 'Available for hire. Enter shopping mode to build your perfect hire!',
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        {/* Add any required scripts */}
      </head>
      <UserProvider>
        <body className={`${roboto.className} bg-brand-bg-dark`}>
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
