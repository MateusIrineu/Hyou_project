import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Teste from "../../componentes/teste";
import { redirect } from "next/navigation";

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

    
    return (
        
        redirect("/")
   )
}
