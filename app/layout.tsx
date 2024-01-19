import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

export const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nick Humberstone - Developer',
  description: 'A JavaScript, React, and React Native Developer',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
