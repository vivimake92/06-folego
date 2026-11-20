import "./modalities.css";

import ModalityCard from "../../components/ModalityCard";

import modalities from "../../data/modalities";

export default function Modalities() {
  return (
    <section className="content">
      <h1>Modalidades</h1>
      <p>Escolha uma modalidade para ver os horários.</p>

      <div className="modality-list">
        {modalities.map((modality) => (
          <ModalityCard key={modality.slug} modality={modality} />
        ))}
      </div>
    </section>
  );
}
