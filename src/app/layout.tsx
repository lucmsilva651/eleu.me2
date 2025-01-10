import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "lucmsilva's Website",
  description: "Personal website of Lucas Gabriel (lucmsilva)",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-[#010409] text-[#f0f6fc]">
      <body className={`${inter.className} m-0`}>
        <Header />
        <main className="bg-[#0d1117] px-5 py-5 sm:px-12 md:px-24 lg:px-40">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

