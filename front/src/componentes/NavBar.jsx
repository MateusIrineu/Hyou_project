'use client'

import React from 'react'
import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='w-full z-50 fixed bg-[#B8C3D7]/35 backdrop-blur-lg shadow-lg shadow-black/20'>
            <nav className=' text-black'>
                <ul className='flex gap-10 items-center p-4 font-bold'>
                    <p>氷 Animes</p>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Animes</a></li>
                    <Link href='/comments'> Meus Comentários </Link>
                    <div className=" ml-auto">
                        <button type="submit" onClick={() => signIn("github", { callbackUrl: "/dashboard" })} className="cursor-pointer"> Entrar </button>
                    </div>
                    <div>
                        <button onClick={() => signOut({ callbackUrl: "/" })} className="cursor-pointer"> Sair </button>
                    </div>
                </ul>

            </nav>
        </div>
    )
}