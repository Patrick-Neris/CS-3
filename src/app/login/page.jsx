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
            serverLogin("12345678910")
            push("/")
        }else if(email == "maria@maria.com" && senha=="321"){
            serverLogin("10987654321")
            push("/")
        }else if(email == "alex@alex.com" && senha=="senha"){
            serverLogin("11122233344")
            push("/")
        }
        else{
            toast.error("dados inválidos")
        }
    }

    return(
        <div className="flex">
            <main className="flex flex-col justify-center items-center p-4 h-screen w-full">
                <h2 className="m-5 font-bold text-2xl bg-emerald-700 rounded p-3">Contas Cadastradas SANOFI</h2>
                <form onSubmit={login} className="flex flex-col gap-2 ">
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-1 rounded text-slate-950" 
                    />
                    
                    <label htmlFor="password">Senha</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        className="p-1 rounded text-slate-950"
                    />
                    
                    <button className=" p-2 rounded mt-2 bg-emerald-500">Entrar</button>
                </form>
            </main>
        </div>
    )
}