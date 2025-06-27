import React from 'react';

import Comentarios from './comentario';

export default function AnimePlayer() {
  return (
    <div className="w-full bg-slate-800 rounded-1xl shadow-lg">
      <video
        controls
        poster="https://i.pinimg.com/736x/84/72/e1/8472e161f906a6e9b08c3d9d74f24754.jpg"
        className="w-5xl aspect-video bg-black"
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>

      <div className='flex justify-around items-center bg-slate-800'>
      <div className="flex justify-start px-4 py-4 w-full me-0.5  hover:bg-slate-700 font-semibold">
        <button className="hover:no-underline ">◀  Anterior</button>
      </div>
      <div className="flex justify-end px-4 py-4 w-full hover:bg-slate-700 font-semibold">
        <button className="hover:no-underline">Próximo ▶</button>
      </div>
      </div>

      <div className="divide-y divide-slate-700 font-semibold">
        <button className="w-full text-left px-4 py-5 hover:bg-slate-700">📄 Legendado</button>
        <button className="w-full text-left px-4 py-5 hover:bg-slate-700">🎤 Dublado</button>
      </div>
      <div className=' max-w-212 w-full my-10 rounded '>
      <Comentarios />
      </div>
    </div>
  );
}
