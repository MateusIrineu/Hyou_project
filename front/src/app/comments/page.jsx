'use client';

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
// importem algum ícone de lixeira aqui

// MÉTODO PARA EXIBIR OU REALIZAR O "GET" DO BACKEND

export default function CommentsPage() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    axios.get("http://localhost:3000/comments")
        .then((response) => {
            setComments(response.data);
            setLoading(false);
    })
        .catch(() => {setLoading(false)});
}, []);

// FUNÇÃO DELETAR
const handleDelete = async (id) => {
    if (!confirm("Deseja excluir este comentário?")) return;

    try {
        await axios.delete(`http://localhost:3000/comments/${id}`);
        setComments(comments.filter((comment) => comment.id !== id));
    } catch (error) {
        console.error("Erro ao excluir tarefa:", error);
    }
};

if (loading) return <div> Carregando Comentários... </div>

// EXIBINDO A LISTA DE COMENTÁRIOS DO BANCO
return(
    <div className="mx-2">
        <h1> Lista de Comentários </h1>

        {comments.length === 0 ? (
            <div> Nenhum comentário encontrado. </div>
        ) : (
            <ul>
                {Array.isArray(comments) && comments.map((comment) => (
                <li key={comment.id}>
                    <div>{comment.comment}</div>

                    <div className="flex mt-2">
                    <div className="mt-4">
                        <Link className="cursor-pointer p-2.5 border" href={`/editComment/${comment.id}`}> EDITAR </Link>
                    
                    </div>
                    <div>
                        <button className="cursor-pointer p-1.5 m-2 border" onClick={() => handleDelete(comment.id)}> DELETAR </button>
                    </div>
                    </div>
                 
                </li> 
            ))}
         </ul>
        )}
    </div>
)
}