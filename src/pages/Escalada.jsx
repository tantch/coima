import ImageCarousel from "../components/ImageCaroussel";

const Escalada = () => (
  <div>
    <p className="justified-text">com o objetivo de demonstrar novas leituras e possibilidades de conexão com a Mata Atlântica, são desenvolvidas atividades de escalada de árvores, não só para a
formação profissional, mas também para o lazer, usufruindo de espécies nativas de grande porte presentes na foresta, escolhidas por sua importância e conteúdo
botânico na preservação do bioma.</p>
    <ImageCarousel
      images={[
        "/assets/compartilhar/escalada-1.webp",
        "/assets/compartilhar/escalada-2.webp",
        "/assets/compartilhar/escalada-3.webp",
      ]}
    />
  </div>
);

export default Escalada;