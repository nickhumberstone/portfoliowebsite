import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

export const roboto = Roboto({ subsets: ['latin'], weight: ['300'] })

export const metadata: Metadata = {
  title: 'Nick Humberstone - Developer',
  description: 'A JavaScript, React, and React Native Developer',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  )
}
