import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatbotWidget from '@/components/ChatbotWidget'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'LIMA - Leadership International Ministerial Academy',
  description: 'LIMA for you, LIMA for me, LIMA for all. Empowering kingdom-purpose driven leaders through faith-inspired education.',
  keywords: 'leadership, ministry, academy, faith, education, LIMA',
  authors: [{ name: 'LIMA Academy' }],
  icons: { icon: '/public/icon.png'},
  openGraph: {
    title: 'LIMA - Leadership International Ministerial Academy',
    description: 'LIMA for you, LIMA for me, LIMA for all',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  )

}



