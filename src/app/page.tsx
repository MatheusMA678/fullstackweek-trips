'use client'

import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'

export default function Home() {
  const { data } = useSession()

  return (
    <div>
      <button onClick={() => signIn()}>Login</button>
      <h1>{data?.user?.name}</h1>
      <Image src={data?.user?.image ?? ''} alt="Imagem do Usuário" />
    </div>
  )
}
