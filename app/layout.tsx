import type { Metadata } from 'next'
import { Inter, Open_Sans, Montserrat } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

const openSans = Open_Sans({ variable: '--font-open', subsets: ['latin'] })
const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'OTT App Assignment',
  description:
    'A demo assignment to test my skills in writing NextJS Components and translating Figma to Code.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${montserrat.variable} bg-ott-blue-2 font-montserrat`}
      >
        <Header thumbnail="/header-thumbnail.jfif" />
        {children}
        <Footer />
      </body>
    </html>
  )
}
