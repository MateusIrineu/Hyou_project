'use client';

import AnimeBanner from "@/componentes/animeBanner";
import AnimePlayer from "@/componentes/animeplayer";
import Temporadas from "@/componentes/temporada";

export default function addComment() {

    return (
        <div bg-slate-700 text-white min-h-screen>
        < AnimeBanner />
        <div className="flex flex-col">
      <div className="max-w-6xl mx-auto px-4 py-8 flex justify-around gap-5">
        <AnimePlayer />
        <Temporadas />
      </div>
      </div>
        </div>
    )
}

