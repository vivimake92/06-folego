import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <a href="/" className="logo">
        💪 Fôlego
      </a>

      <nav className="nav">
        <a href="/">Início</a>
        <a href="/modalidades">Modalidades</a>
        <a href="/sobre">Sobre</a>
      </nav>
    </header>
  );
}
