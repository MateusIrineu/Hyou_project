'use client'

import { signOut } from "next-auth/react";

export default function Logout() {
    return (
        <button onClick={() => signOut({callbackUrl: "/"})} className="cursor-pointer"></button>
    )
}