// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gracewell Careers',
  description: 'Find jobs. Grow your career. Stand out with your CV.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer variant="dark" />
      </body>
    </html>
  )
}
