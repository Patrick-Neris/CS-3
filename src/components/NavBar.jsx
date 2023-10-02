"use client"

import { serverLogout } from "@/actions/user"
import { useRouter } from "next/navigation"

export default function NavBar(){
    const { push } = useRouter()

    function logout(){
        serverLogout()
        push("/login")
    }

    return(
        <nav className="bg-emerald-800 p-4 flex justify-between">
            <ul>
                <li>
                    <h1 className="text-3x1 font-bold">Contas Cadastradas</h1>
                </li>
            </ul>
            <ul>
                <li>
            <button onClick={logout}>
                Logout
            </button>
                </li>
            </ul>
        </nav>
    )
}