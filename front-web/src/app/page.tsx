import Image from 'next/image'
import { User } from 'lucide-react'
import nlwLogo from '../assets/logo.svg'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* LEFT */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/stars.svg)] bg-cover px-28 py-16">
        {/* BLUR */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-[194px]" />

        {/* STRIPES */}
        <div className="absolute bottom-0 right-2 top-0 w-2  bg-stripes" />

        {/* SIGN IN */}
        <a
          href=""
          className="hover: flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex h-10 w-10  items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <p className="max-w-[140px] text-sm leading-snug">
            <span className="underline">Crie a sua conta</span> e salve suas
            memórias!
          </p>
        </a>

        {/* HERO */}
        <div className="space-y-5">
          <Image src={nlwLogo} alt="Logo NLW Spacetime" />

          <div className="max-w-[420px] space-y-1">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>

          <a
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
            href=""
          >
            CADASTRAR LEMBRANÇA
          </a>
        </div>

        {/* COPYRIGHT */}
        <div className="text-sm leading-relaxed">
          Feito com 💜 no NLW da{' '}
          <a
            className="underline hover:text-gray-50"
            href="https://rocketseat.com.br"
            target="_blank"
            rel="noreferrer"
          >
            Rocketseat
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col bg-[url(../assets/stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a href="" className="underline hover:text-gray-50">
              Criar agora
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
