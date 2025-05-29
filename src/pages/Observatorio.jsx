import ImageCarousel from "../components/ImageCaroussel";

const Observatorio = () => (
  <div>
    <p>2021</p>
    <p>plataforma para contemplação da paisagem e refúgio para pernoite, construído no alto da montanha, utilizando pedras naturais para o apoio da cobertura (método
pré-histórico megalítico),executada com forma externa de bambu, cheia com charcrete (concreto de carvão e cimento) e com estrutura interna também de bambu.</p>
    <ImageCarousel
      images={[
        "/coima/assets/conjungar/observatorio-1.webp",
        "/coima/assets/conjungar/observatorio-2.webp",
        "/coima/assets/conjungar/observatorio-3.webp",
      ]}
    />
  </div>
);

export default Observatorio;