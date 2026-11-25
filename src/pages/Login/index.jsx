import { useState, useContext } from "react";

import { useNavigate } from "react-router";

import AuthContext from "../../contexts/AuthContext";

import "./login.css";

export default function Login() {
  const [name, setName] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Olá,", name.trim());

    login(name.trim());
    navigate("/area-do-aluno");
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
