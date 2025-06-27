"use client";

import { useState } from "react";
// import { useRouter } from "next/navigation";
import axios from "axios";

export default function addComment() {
  const [comment, setComment] = useState("");
  // const router = useRouter();

  // MÉTODO PARA COMENTAR
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/comments", {
        comment,
      });

      setComment("");
      // router.push('/comments');
      alert("Comentário enviado com sucesso!");
    } catch (error) {
      console.log("Erro ao adicionar comentário: ", error);
      alert("Erro ao adicionar comentário, servidor fora do ar.");
    }
  };

  return (
    <div className="max-w-212 w-full p-6 rounded ">
      <h2 className="text-lg font-semibold mb-2">💬 Deixe um comentário</h2>
      <form
        className="mx-2 flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div>
          <textarea
            id="comment"
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Digite seu comentário"
            className="w-190 h-50 mb-5 p-6 text-sm bg-slate-700 border border-slate-600 rounded resize-none text-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-600"
            rows="4"
            minLength="10"
            required
          />
        </div>
        <button
          disabled={comment.trim().length === 0}
          className="w-50 font-bold cursor-pointer p-2 bg-slate-600 hover:bg-slate-900/60 bg rounded-lg transition-all duration-300 disabled:opacity-50"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
