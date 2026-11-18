import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="content">
      <h1>Página não encontrada</h1>
      <p>O endereço digitado não existe neste site.</p>
      <Link to="/">Voltar para o início</Link>
    </section>
  );
}
