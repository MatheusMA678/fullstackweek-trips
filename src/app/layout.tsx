import './globals.css'
import React from 'react'
import { Poppins } from 'next/font/google'
import { NextAuthProvider } from '@/providers/auth'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'FSW Airbnb',
  description: 'Sistema de reserva de viagens TOP!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.className} min-h-screen bg-zinc-950 text-zinc-50`}
      >
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  )
}
