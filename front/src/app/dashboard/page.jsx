import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import AlertLogin from "@/componentes/alertaLogin/page";

export default async function Dashboard() {
    const session = await getServerSession(authOptions)
    console.log("Sessão:", session);

    if (!session) {
        return (
           
            <div className=""> 
                VOCÊ NÃO ESTÁ LOGADO
            </div>
        )
    }

    
    return(
        <div className="bg-slate-900 text-white min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-5">Bem Vindo Ao 氷 Animes </h1>
             <div>
                <img className="rounded-lg" src="https://i.pinimg.com/736x/ac/3e/b4/ac3eb4718438dcc3c5a07524da8ec048.jpg" alt="" />
            </div>
             <AlertLogin />
        </div>
    )
}
