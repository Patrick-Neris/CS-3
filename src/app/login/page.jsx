"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { serverLogin } from "@/actions/user";

export default function Login(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const { push } = useRouter()

    function login(e){
        e.preventDefault()
        if (email == "joao@joao.com" && senha=="123"){
            serverLogin()
            push("/")
        }else if(email == "maria@maria.com" && senha=="321"){
            serverLogin()
            push("/")
        }
        else{
            toast.error("dados inválidos")
        }
    }

    return(
        <div className="flex">
            <main className="flex flex-col justify-center items-center p-4 h-screen w-full">
                <h2>Contas Cadastradas SANOFI</h2>
                <form onSubmit={login} className="flex flex-col gap-2">
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-1 rounded" 
                    />
                    
                    <label htmlFor="password">Senha</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        className="p-1 rounded"/>
                    
                    <button className=" p-2 rounded mt-2">Entrar</button>
                </form>
            </main>
        </div>
    )
}