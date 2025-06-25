'use client';

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import axios from "axios";

export default function EditCommentPage() {
    const [comments, setComments] = useState([]);
    const [selectedCommentId, setSelectedCommentId] = useState('');
    const [comment, setComment] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
    async function fetchComments() {
        setLoading(true);

        try {
            const res = await axios.get('http://localhost:3000/comments');
            setComments(res.data);
        } catch (error) {
            alert('Erro ao buscar comentário');
        }

        setLoading(false);
    }

    fetchComments();
}, []);

    useEffect(() => {
        if (selectedCommentId) {
            const comment = comments.find(t => t.id === selectedCommentId);
            if (comment) {
                setComment(comment.comment)
            } else {
                setComment('');
            }
        }
    }, [selectedCommentId, comments]);

    async function handleSubmit(e) {
        e.preventDefault();
         if (!selectedCommentId) return;

        try {
             await axios.put(`http://localhost:3000/comments/${selectedCommentId}`, {
                comment
        });

            alert('Comentário atualizado com sucesso.');
            router.push('/comments');
        } catch {
            alert('Erro ao atualizar comentário');
        }
    }

    return (
        <div className="border w-200 p-5">
            <div className="h-16"></div>
            <h1> EDIÇÃO DE COMENTÁRIOS </h1>

            {loading ? (
                <div> Carregando comentários... </div>
            ) : 
            <>
                <div>

                    <select 
                    value={ selectedCommentId }
                    onChange={e => setSelectedCommentId(e.target.value)}>

                        <option className="cursor-pointer" value=""> Clique aqui para selecionar </option>

                    {comments.map(comment => (
                        <option 
                        key={comment.id}
                        value={comment.id}> {comment.comment} </option>
                    ))}
                    </select>

                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="comment"> Comentário </label>

                        <input 
                        type="text" 
                        value={comment}
                        id="comment"
                        placeholder="Comentário"
                        onChange={e => setComment (e.target.value)}
                        disabled={!selectedCommentId}
                        />
                    </div>
                   <button
                   type="submit"
                   disabled={!selectedCommentId}
                   className="border cursor-pointer p-2 mt-2"
                   > Salvar Alterações </button>
                </form>
                </>}
        </div>
    )
}
