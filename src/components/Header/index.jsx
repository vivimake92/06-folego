import { Link } from "react-router";

import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        💪 Fôlego
      </Link>

      <nav className="nav">
        <Link to="/">Início</Link>
        <Link to="/modalidades">Modalidades</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>
    </header>
  );
}
