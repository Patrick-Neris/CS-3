import NavBar from "@/components/NavBar";
import CardConta from "@/components/CardConta";

async function enviarCpf(cpf) {
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
  return json.results
}

const contaTeste = {
  valor: 23.19,
  data: "23-09-2022",
  horario: "10:56",
  pagamento: "pix"
}

export default async function Home() {

  const contas = await enviarCpf("12345678910")
  return (
    <>
      <NavBar />

      <section className="flex flex-wrap">
        {/* {contas.map(conta => <CardConta conta={conta}/>)} */}
        {<CardConta conta={contaTeste}/>}
      </section>
    </>
  );
}
