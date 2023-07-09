'use client'

import { useState } from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineMenu } from 'react-icons/ai'

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const { status, data } = useSession()

  const handleOpenMenu = () => setMenuIsOpen(prev => !prev)
  const handleLogin = () => signIn()
  const handleLogout = () => {
    setMenuIsOpen(false)
    signOut()
  }

  return (
    <header className="container mx-auto py-0 h-[93px] p-5 flex items-center justify-between">
      <Image src={'/logo.png'} alt="Full Stack Week" width={183} height={32} />

      {status === 'unauthenticated' && (
        <button className="text-primary-purple text-sm font-semibold" onClick={handleLogin}>Login</button>
      )}

      {status === 'authenticated' && data.user && (
        <div className="rounded-full relative py-2 px-3 gap-3 flex items-center justify-between border border-primary-grayLighter">
          <AiOutlineMenu size={24} onClick={handleOpenMenu} className="cursor-pointer" />

          <Image width={32} height={32} src={data.user?.image ?? ''} alt={data.user.name!} className="rounded-full" />

          {menuIsOpen && (
            <div className="absolute top-16 left-0 w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
              <button className="text-primary-purple text-sm font-semibold" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  )
}
