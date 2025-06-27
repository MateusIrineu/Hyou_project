"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
// importem algum ícone de lixeira aqui

// MÉTODO PARA EXIBIR OU REALIZAR O "GET" DO BACKEND

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/comments")
      .then((response) => {
        setComments(response.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  // FUNÇÃO DELETAR
  const handleDelete = async (id) => {
    if (!confirm("Deseja excluir este comentário?")) return;

    try {
      await axios.delete(`http://localhost:3000/comments/${id}`);
      setComments(comments.filter((comment) => comment.id !== id));
    } catch (error) {
      console.error("Erro ao excluir Comentário:", error);
    }
  };

  if (loading) return <div> Carregando Comentários... </div>;

  // EXIBINDO A LISTA DE COMENTÁRIOS DO BANCO
  return (
    <div className=" bg-slate-900 ">
      <div className="h-16"></div>
      <h1 className="text-center mt-5 font-bold text-2xl">
        {" "}
        Meus Comentários{" "}
      </h1>
      {comments.length === 0 ? (
        <div> Nenhum comentário encontrado. </div>
      ) : (
        <ul className="flex flex-col items-center justify-center gap-4 mt-5">
          {Array.isArray(comments) &&
            comments.map((comment) => (
              <li
                className=" shadow-lg shadow-black p-4 rounded-2x w-100 h-50 relative"
                key={comment.id}
              >
                <div className="absolute inset-0 flex justify-center items-center z-0">
                  <img
                    className="rounded-2xl w-full h-full object-cover opacity-25"
                    src="https://i.pinimg.com/736x/3b/04/e4/3b04e4dce35573d332224a4ceb46866a.jpg"
                    alt=""
                  />
                </div>
                <div className="relative z-10">
                  <div className="flex justify-end gap-2 mb-4">
                    <Link
                      className="cursor-pointer hover:text-blue-300 transition-all duration-300"
                      href={`/editComment/${comment.id}`}
                    >
                      <FaRegEdit className="text-2xl" />
                    </Link>
                    <button
                      className="cursor-pointer text-2xl hover:text-red-700 transition-all duration-300 font-bold"
                      onClick={() => handleDelete(comment.id)}
                    >
                      <MdDeleteOutline className="text-2xl" />
                    </button>
                  </div>
                  <div className="flex justify-center font-bold mb-4">
                    {comment.comment}
                  </div>
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
