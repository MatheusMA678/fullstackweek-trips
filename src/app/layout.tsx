import './globals.css'
import React from 'react'
import { Poppins } from 'next/font/google'
import { NextAuthProvider } from '@/providers/auth'
import { Header } from '../components/Header'

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
        className={poppins.className}
      >
        <NextAuthProvider>
          <Header />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
