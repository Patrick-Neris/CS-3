"use server"

import {cookies} from "next/headers"

export async function serverLogin(cpf){ 
    cookies().set("usuario", {
        maxAge: 60 * 60 * 24
    })
    cookies().set("cpf", cpf)
}

export async function serverLogout(){
    cookies().delete("usuario")
}