import { useParams, Link, useNavigate } from "react-router";

import "./modality-detail.css";

import modalities from "../../data/modalities";

export default function ModalityDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const modality = modalities.find((item) => {
    return item.slug == slug;
  });

  if (modality == undefined) {
    return (
      <section className="content">
        <h1>Modalidade {slug} não encontrada</h1>
        <p>Confira o endereço ou veja a lista completa.</p>
        <Link to="/modalidades">Ver todas as modalidades</Link>
      </section>
    );
  }

  return (
    <section className="content">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Voltar
      </button>
      <span className="detail-emoji">{modality.emoji}</span>
      <h1>{modality.name}</h1>
      <p>{modality.description}</p>
      <ul>
        <li>Quem ensina: {modality.teacher}</li>
        <li>Horário: {modality.schedule}</li>
        <li>Nível: {modality.level}</li>
      </ul>
    </section>
  );
}
