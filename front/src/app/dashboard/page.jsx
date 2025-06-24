import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Logout from "@/componentes/Logout";


export default async function Dashboard() {
    const session = await getServerSession(authOptions)

    if (!session) {
        return (
           
            <div className=""> 
                VOCÊ NÃO ESTÁ LOGADO
            </div>
        )
    }


    return (
        <div>
            <div>
                Olá, {session?.user?.name}
            </div>
            <p>BLA BLA BLA</p>

            <div>
                <Logout/>
            </div>
        </div>
    )
}