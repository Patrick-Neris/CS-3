"use client"

export default function CardConta({conta}){
    return (
        <div id="card" className="flex flex-col w-40 justify-center items-center m-2 text-slate-100 bg-emerald-700 rounded p-2">
            <h3 className="font-bold text-xl m-2">R$ {conta.valor}</h3>
            <span>{conta.data}</span>
            <span>{conta.horario}</span>
            <span>{conta.pagamento}</span>
        </div>
    )
}