import { useState } from "react";

import "./login.css";

export default function Login() {
  const [name, setName] = useState("");

  return (
    <section className="content">
      <h1>Entrar</h1>

      <form className="login-form">
        <label htmlFor="name">Seu nome</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <button>Entrar</button>
      </form>
    </section>
  );
}
