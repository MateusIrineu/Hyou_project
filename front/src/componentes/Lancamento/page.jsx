
import React from 'react';



export default function Lancamentos() {

  const cards = [
    { id: 1, nome: "Jujutsu Kaisen", idioma: "Leg / Dub", titulo: "Inventário Oculto", capa: "https://i.pinimg.com/736x/25/db/a5/25dba53ae14630b01af7f695f88abc37.jpg" },
    { id: 2, nome: "Demon Slayer", idioma: "Legendado", titulo: "Flame Hashira Kyojuro Rengoku", capa: "https://i.pinimg.com/736x/1b/eb/d8/1bebd8de092234b1505ee76823671e06.jpg" },
    { id: 3, nome: "Attack on Titan", idioma: "Dublado", titulo: "Beast Titan", capa: "https://i.pinimg.com/736x/d6/db/56/d6db56701eb303d9dd3cddab3afb4701.jpg" },
    { id: 4, nome: "Naruto", idioma: "Dub / Leg", titulo: "Reportagem Especial: Ao Vivo da Floresta da Morte", capa: "https://i.pinimg.com/736x/4b/81/bc/4b81bcc46f99c4e2d2716305e06d6208.jpg" },
  ];


  return (
    <section className="bg-slate-700 py-10">
      <h2 className="text-3xl text-center font-bold text-white mb-6">LANÇAMENTOS RECENTES</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8">
        {cards.map((card) => (
          <div key={card.id} className="bg-slate-900 hover:scale-102 duration-200 transition-all cursor-pointer rounded overflow-hidden">
            <div className="bg-slate-500 h-32">
              <img
                src={card.capa}
                alt={card.nome}
                className="w-full h-32 object-cover"
              />
            </div>
            <div className="p-3">
              <p className="text-xs text-slate-400">{card.nome}</p>
              <p className="text-sm text-white">{card.titulo}</p>
              <p className="text-xs text-slate-400">Episódio 2x1</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}