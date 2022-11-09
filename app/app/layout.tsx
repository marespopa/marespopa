import { Inter } from '@next/font/google'
import '../styles/globals.css'

import Footer from './components/Footer'
import Header from './components/Header'
import HeadMeta from './components/HeadMeta'

const inter = Inter({
  variable: '--font-inter',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <HeadMeta title={'Mares Popa - Bringing web apps to life'} />
      <body>
        <div>
          <Header />
          <main className="bg-white container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 px-2 md:px-4">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
