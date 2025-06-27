'use client'

import React from 'react';
import Link from 'next/link';

const animes = [
  { id: 1, nome: "Jujutsu Kaisen", idioma: "Leg / Dub", capa: "https://i.pinimg.com/736x/25/db/a5/25dba53ae14630b01af7f695f88abc37.jpg" },
  { id: 2, nome: "Demon Slayer", idioma: "Legendado", capa: "https://i.pinimg.com/736x/1b/eb/d8/1bebd8de092234b1505ee76823671e06.jpg" },
  { id: 3, nome: "Attack on Titan", idioma: "Dublado", capa: "https://i.pinimg.com/736x/d6/db/56/d6db56701eb303d9dd3cddab3afb4701.jpg" },
  { id: 4, nome: "Naruto", idioma: "Dub / Leg", capa: "https://i.pinimg.com/736x/4b/81/bc/4b81bcc46f99c4e2d2716305e06d6208.jpg" },
  { id: 5, nome: "One Piece", idioma: "Legendado", capa: "https://i.pinimg.com/736x/c1/67/52/c1675291978b4991a3f9ca43cd44ed8f.jpg" }
];

export default function Novidades() {
  return (
    <section className="bg-slate-900 shadow-black shadow-lg  text-white py-10">
      <h2 className="text-3xl font-bold text-center mb-6">NOVIDADES</h2>
      <div className="flex justify-around gap-6 flex-wrap">
        {animes.map((anime) => (
          <Link
            href="/addComment"
            key={anime.id}
            className="w-[250px] h-[450px] hover:scale-105 bg-slate-700 rounded-lg g shadow-md flex flex-col justify-end cursor-pointer duration-200 transition-all"
          >
            <div className="relative w-full h-full">
              <img
                src={anime.capa}
                alt={anime.nome}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-t"
              />
              <div className="absolute bottom-0 left-0 w-full bg-slate-800 bg-opacity-90 p-2 text-center">
                <p className="text-xs">{anime.idioma}</p>
                <p className="text-sm font-semibold">{anime.nome}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}