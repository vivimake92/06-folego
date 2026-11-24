import { useState } from "react";

import "./login.css";

export default function Login() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Olá,", name);
  }

  return (
    <section className="content">
      <h1>Entrar</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Seu nome</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <button disabled={name.trim() == ""}>Entrar</button>
      </form>
    </section>
  );
}
