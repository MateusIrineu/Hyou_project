'use cliente'

// import Image from "next/image";
import Link from "next/link";
import Footer from "@/componentes/Footer";
import Carrossel from "@/componentes/Carrossel";
import Header from "@/componentes/Header";
import Lancamentos from "@/componentes/Lancamento/page";
import Novidades from "@/componentes/Novidade/page";


export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main >
        <div className="h-14"></div>
        <div>
          <Carrossel />
        </div>
        <div className="flex justify-center bg-slate-900 items-center text-white">
          <h1 className="text-8xl  font-bold p-4 inline-block hover:scale-105 transition-all duration-300 cursor-pointer">
            氷 Animes
          </h1>
        </div>

        <Novidades/>
        <Lancamentos/>
        <Footer/>


      </main>
    </div>
  );
}
