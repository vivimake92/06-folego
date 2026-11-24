import { Link, NavLink } from "react-router";

import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        💪 Fôlego
      </Link>

      <nav className="nav">
        <NavLink to="/">Início</NavLink>
        <NavLink to="/modalidades">Modalidades</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/planos">Planos</NavLink>
        <NavLink to="/avaliacoes">Avaliações</NavLink>
        <NavLink to="/contato">Contato</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </header>
  );
}
