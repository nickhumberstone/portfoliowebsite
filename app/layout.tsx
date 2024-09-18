import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

export const roboto = Roboto({ subsets: ['latin'], weight: ['300'] })

export const metadata: Metadata = {
  title: 'Nick Humberstone - Developer',
  description: 'A JavaScript, React, and React Native Developer',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-J2F8SEHNTN" strategy='afterInteractive'></Script>
        <Script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag("js", new Date());
          gtag("config", ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
