import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// These two bootstrap lines make sure that css and javascript files are globally imported across all pages
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapClient from './components/BootstrapClient';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Loras Baja',
  description: 'Created using NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      <BootstrapClient /> {/* Render BootstrapClient first */}
      <body className={inter.className}>{children}</body> 
    </html>
  )
}
