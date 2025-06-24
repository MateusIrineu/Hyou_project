'use client';

import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";
import React from "react";
import Link from "next/link";


const Header = () => {
    return (
        <div>
            <header>
                <nav className="bg-black-950 text-white p-5 border">
                    <Link href='/'> Início </Link>
                    <Link href='#'> Animes </Link>
                    <Link href='/comments'> Meus Comentários </Link>
                     <div className="mt-3.5">
                        <button type="submit" onClick={() => signIn("github", {callbackUrl: "/dashboard"})} className="cursor-pointer"> Entrar </button>
                    </div>
                    <div>
                        <button onClick={() => signOut({callbackUrl: "/"})} className="cursor-pointer"> Sair </button>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header