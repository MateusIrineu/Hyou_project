"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function EditCommentPage() {
  const [comments, setComments] = useState([]);
  const [selectedCommentId, setSelectedCommentId] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchComments() {
      setLoading(true);

      try {
        const res = await axios.get("http://localhost:3000/comments");
        setComments(res.data);
      } catch (error) {
        alert("Erro ao buscar comentário");
      }

      setLoading(false);
    }

    fetchComments();
  }, []);

  useEffect(() => {
    if (selectedCommentId) {
      const comment = comments.find((t) => t.id === selectedCommentId);
      if (comment) {
        setComment(comment.comment);
      } else {
        setComment("");
      }
    }
  }, [selectedCommentId, comments]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!selectedCommentId) return;

    try {
      await axios.put(`http://localhost:3000/comments/${selectedCommentId}`, {
        comment,
      });

      alert("Comentário atualizado com sucesso.");
      router.push("/comments");
    } catch {
      alert("Erro ao atualizar comentário");
    }
  }

  return (
    <div className="p-5">
      <div className="h-16"></div>
      <h1 className="text-center mb-5 font-bold text-2xl ">
        {" "}
        EDIÇÃO DE COMENTÁRIOS{" "}
      </h1>

      {loading ? (
        <div> Carregando comentários... </div>
      ) : (
        <>
          <div className="flex flex-col items-center">
            <div className="w-200 h-70 p-5 rounded-lg shadow-lg shadow-black relative flex justify-center">
              <img
                src="https://i.pinimg.com/736x/8c/fd/de/8cfdde9a0ad9ce269bcdc414c5742f60.jpg"
                alt="Fundo"
                className="absolute inset-0 z-0 w-full rounded-2xl h-full object-cover opacity-30"
              />
              <div className="w-100 h-50 flex flex-col justify-center items-center ite p-5 relative z-10">
                <div className="mb-4">
                  <select
                    value={selectedCommentId}
                    onChange={(e) => setSelectedCommentId(e.target.value)}
                    className="font-bold bg-black/30 p-2 rounded-lg cursor-pointer"
                  >
                    <option className="cursor-pointer font-bold text-black" value="">
                      Clique aqui para selecionar
                    </option>

                    {comments.map((comment) => (
                      <option className="text-black font-bold" key={comment.id} value={comment.id}>
                        {comment.comment}
                      </option>
                    ))}
                  </select>
                </div>
                <form className="flex font-bold flex-col items-center" onSubmit={handleSubmit}>
                  <div className="mb-10 bg-black/30 p-2 rounded-lg">
                    <label htmlFor="comment"> Comentário </label>
                    <input
                      type="text"
                      value={comment}
                      id="comment"
                      placeholder="Comentário"
                      onChange={(e) => setComment(e.target.value)}
                      disabled={!selectedCommentId}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!selectedCommentId}
                    className=" cursor-pointer p-2 bg-black/50 rounded-2xl hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-40"
                  >
                    Salvar Alterações
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
