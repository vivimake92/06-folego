import { Link } from "react-router";

import "./modality-card.css";

export default function ModalityCard({ modality }) {
  return (
    <article className="modality-card">
      <span className="modality-emoji">{modality.emoji}</span>
      <h2>{modality.name}</h2>
      <p>{modality.level}</p>
      <Link to={`/modalidades/${modality.slug}`}>Ver detalhes</Link>
    </article>
  );
}
