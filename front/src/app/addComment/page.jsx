'use client';

import { useState } from "react";
// import { useRouter } from "next/navigation";
import axios from "axios";

export default function addComment() {
    const [comment, setComment] = useState('');
    // const router = useRouter();


    // MÉTODO PARA COMENTAR
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3000/comments', {
                comment
            });

            setComment('');
            // router.push('/comments');
        } catch (error) {
            console.log('Erro ao adicionar comentário: ', error);
            alert('Erro ao adicionar comentário, servidor fora do ar.');
        }
    };

    return (
        <div>

            <form className="mx-2" onSubmit={ handleSubmit }>
                <div>
                    <label htmlFor="comment"> COMENTE AQUI </label>
                    <input 
                    type="text" 
                    value={ comment }
                    onChange={e => setComment(e.target.value)}
                    placeholder="Digite seu comentário"
                    />
                </div>
                <button className="cursor-pointer p-2 border" type="submit"> Adicionar </button>
            </form>
        </div>
    )
}