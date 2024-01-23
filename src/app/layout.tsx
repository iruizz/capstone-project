import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './ui/globals.css'
// These two bootstrap lines make sure that css and javascript files are globally imported across all pages
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapClient from './components/BootstrapClient';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap-icons/font/bootstrap-icons.css'

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
      <body className={inter.className}>
      <Navbar/> {/* This will always show the Navbar at the top of every page*/}
      {children}
      <Footer/> {/* This will always show the Footer at the bottom of every page*/}
      </body> 
    </html>
  )
}
