import NavBar from "@/components/NavBar";
import CardConta from "@/components/CardConta";
import { cookies } from "next/headers";

async function pesquisarContas(cpf) {
  const url = "https://sprint-api.vercel.app/api/sprint";
  const parametros = {
    cpf: cpf,
  };
  const options = {
    method: "POST",
    body: new URLSearchParams(parametros),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  };

  const response = await fetch(url, options);
  const json = await response.json();
  return json
}

export default async function Home() {

  const contas = await pesquisarContas(cookies().get("cpf").value)

  if(!contas.message) {
    return (
      <>
        <NavBar />
  
        <section className="flex flex-wrap">
          {contas.map(conta => <CardConta conta={conta}/>)}
        </section>
      </>
    );
  }
  
  return (
    <>
      <NavBar />

      <h1 className="p-2 text-2xl font-bold">Não há contas cadastradas para seu usuário.</h1>
    </>
  );
}
