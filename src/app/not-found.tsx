import React from 'react'
import Image from 'next/image'
import Image404 from "./../../public/Images/404.jpg"
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
    {/*
      This example requires updating your template:

      ```
      <html class="h-full">
      <body class="h-full">
      ```
    */}
    <main className=":isolate min-h-full">
      <Image
        src={Image404}
        alt="Vous êtes perdu"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
        width={2000} height={1188}
      />
      <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
        <p className="text-base font-semibold leading-8 text-white">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Vous êtes perdu</h1>
        <p className="mt-4 text-base text-white/70 sm:mt-6">Désolé nous ne trouvons pas la page que vous recherchez</p>
        <div className="mt-10 flex justify-center">
          
            <Link href="/" className="text-sm font-semibold leading-7 text-white">
            <span aria-hidden="true">&larr;</span> Retour à la page d&apos;Accueil
            </Link>
        </div>
      </div>
    </main>
  </>
  )
}



