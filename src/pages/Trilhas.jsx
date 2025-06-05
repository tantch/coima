import ImageCarousel from "../components/ImageCaroussel";

const Trilha = () => (
  <div>
    <div class="justified-text">
      a recuperação de caminhos (particulares e municipais, usados nas antigas plantações ou nos trajetos intraurbanos e que hoje estão absorvidos pela oresta), são abertos a uma experiência que alia o conhecimento do passado com uma vivência presente da natureza, promovendo o bem estar (saúde mental e física), através do convívio social e da prática esportiva.
    </div>

    <ImageCarousel
      images={[
        "/assets/compartilhar/trilha-1.webp",
        "/assets/compartilhar/trilha-2.webp",
        "/assets/compartilhar/trilha-3.webp",
        "/assets/compartilhar/trilha-4.webp",
        "/assets/compartilhar/trilha-5.webp",
      ]}
    />
  </div>
);

export default Trilha;