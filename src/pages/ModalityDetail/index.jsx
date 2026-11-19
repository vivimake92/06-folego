import { useParams } from "react-router";

import "./modality-detail.css";

import modalities from "../../data/modalities";

export default function ModalityDetail() {
  const { slug } = useParams();
  const modality = modalities.find((item) => {
    return item.slug == slug;
  });

  return (
    <section className="content">
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
