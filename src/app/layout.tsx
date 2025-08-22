import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hello World Server',
  description: 'Minimal Next.js + Tailwind Hello World server with API route'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}
