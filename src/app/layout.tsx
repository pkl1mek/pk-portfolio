import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const satoshi = localFont({
  src: '../fonts/Satoshi-Variable.woff2', // Dwie kropki na początku są kluczowe
  variable: '--font-satoshi',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pk Projects',
  description: 'Moje portfolio stworzone w Next.js i Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className={`${satoshi.variable}`}>
      <body
        className="
          bg-background text-foreground
          bg-main-bg bg-no-repeat bg-center bg-cover bg-fixed
        "
      >
        {children}
      </body>
    </html>
  )
}