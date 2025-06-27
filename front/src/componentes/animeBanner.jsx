import React from "react";

export default function AnimeBanner() {
  return (
    <div
      className="relative w-full h-64 md:h-120 bg-cover bg-center flex items-center justify-start px-6 md:px-12 group"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/9e/58/ee/9e58eeca1bc8027eb9a23b2f724cc4ab.jpg')",
      }}
    >
      {/* Overlay preto com opacidade 0 e 50% no hover, sem transição */}
      <div className="absolute inset-0  bg-transparent"></div>
      <div className="relative z-10 flex items-start gap-6 max-w-6xl mx-auto w-full hover:scale-105 hover:bg-black/70 p-4 rounded-2xl transition-transform duration-300 ease-in-out">
        <img
          className="w-28 h-40 md:w-40 md:h-56 object-cover rounded shadow-md"
          src="https://i.pinimg.com/736x/99/ef/83/99ef837028463d4f940b63c2b288222b.jpg"
          alt="Capa do anime"
        />

        <div className="text-white max-w-3xl">
          <h1 className="text-2xl md:text-3xl font-bold mb-1">
            Jujutsu Kaisen
          </h1>
          <p className="text-sm text-slate-300 mb-2"></p>

          <div className="flex flex-wrap gap-4 text-xs text-amber-50 mb-3 ">
            <span>📅 2020</span>
            <span>🎬 temporadas</span>
            <span>🎞️ 47 episódios</span>
          </div>

          <p className="text-sm text-amber-50 line-clamp-5 mt-10">
            Sofrimento, arrependimento, vergonha: os sentimentos negativos dos
            humanos tornam-se Maldições que assolam o nosso dia-a-dia. Maldições
            avassalam o mundo todo, levando as pessoas a sofrer terríveis
            acidentes, levando até mesmo à morte. E para piorar, Maldições só
            podem ser exorcizadas por outras Maldições. Itadori Yuji é um garoto
            com tremenda força física que leva uma vida colegial absolutamente
            normal. Certo dia, para salvar amigos que estavam sendo atacados por
            Maldições, ele engole o dedo do Ryomen-Sukuna, absorvendo sua
            Maldição. Desse momento em diante, Gojo e o Ryomen-Sukuna
            compartilham o mesmo corpo. Orientado pelo mais poderoso dos
            feiticeiros, Gojo Satoru, Itadori se matricula no Colégio Técnico de
            Feitiçaria de Tóquio, uma organização que combate as Maldições... e
            assim começa a heroica lenda do garoto que tornou-se uma Maldição
            para exorcizar uma Maldição, uma vida da qual ele nunca mais
            conseguirá se desvencilhar.
          </p>
        </div>
      </div>
    </div>
  );
}
