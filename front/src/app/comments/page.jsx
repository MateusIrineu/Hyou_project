'use client';

import React, { useEffect, useState } from "react";
import axios from "axios";
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
    <div>
        <h1> Lista de Comentários </h1>

        {comments.length === 0 ? (
            <div> Nenhum comentário encontrado. </div>
        ) : (
            <ul>
                {Array.isArray(comments) && comments.map((comment) => (
                <li key={comment.id}>
                    <div>{comment.comment}</div>
                    <div>
                        <button className="cursor-pointer p-2 border" onClick={() => handleDelete(comment.id)}> DELETAR </button>
                    </div>
                </li> 
            ))}
         </ul>
        )}
    </div>
)
}