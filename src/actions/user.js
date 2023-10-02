"use server"

import {cookies} from "next/headers"

export async function serverLogin(){ 
    cookies().set("usuario", {
        maxAge: 60 * 60 * 24
    })
}

export async function serverLogout(){
    cookies().delete("usuario")
}