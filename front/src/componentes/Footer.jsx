import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="container mx-auto px-4 flex flex-col items-center text-center space-y-4">

        {/* Nome ou Logo */}
        <div className="text-3xl font-bold tracking-wide">
          氷 ANIMES
        </div>

        {/* Navegação */}
        <div className="flex flex-wrap justify-center space-x-6 text-sm text-white">
          <a href="#" className="flex items-center space-x-1 hover:text-slate-400">
            <span>🏠</span><span>Início</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:text-slate-400">
            <span>📺</span><span>Animes</span>
          </a>
        </div>

        {/* Frase */}
        <p className="text-sm text-slate-400 italic">
          Os limites só existem se você os deixar existir ®
        </p>

        {/* Redes Sociais */}
        <div className="flex space-x-4 text-white text-xl">
          <a href="#" className="hover:text-slate-400"><FaFacebookF /></a>
          <a href="#" className="hover:text-slate-400"><FaTwitter /></a>
          <a href="#" className="hover:text-slate-400"><FaInstagram /></a>
        </div>

        {/* Direitos autorais */}
        <div className="text-xs text-slate-500 mt-4">
          © {new Date().getFullYear()} Animes. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}