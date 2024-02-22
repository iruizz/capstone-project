import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './ui/globals.css'
// These two bootstrap lines make sure that css and javascript files are globally imported across all pages
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapClient from './components/BootstrapClient';
import Navbar from './components/general/Navbar';
import Footer from './components/general/Footer';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AuthProvider from './context/AuthProvider'

const quicksand = Quicksand({ subsets: ['latin'] })

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
      <BootstrapClient/>
      <body className={quicksand.className} style={{ backgroundImage: 'url("/background.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', }}>
      <AuthProvider>
      <Navbar/> 
      {children}
      <Footer/>
      </AuthProvider>
      </body> 
    </html>
  )
}
