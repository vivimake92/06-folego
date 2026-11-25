import { useContext, userContext } from "react";

import AuthContext from "../../contexts/AuthContext";

import "./student-area.css";

import modalities from "../../data/modalities";

export default function StudentArea() {
  const { user } = useContext(AuthContext);

  return (
    <section className="content">
      <h1>Olá, {user}!</h1>

      <p>Estes são os horários da semana:</p>

      <ul>
        {modalities.map((modality) => (
          <li key={modality.slug}>
            {modality.emoji} {modality.name}: {modality.schedule}
          </li>
        ))}
      </ul>
    </section>
  );
}
