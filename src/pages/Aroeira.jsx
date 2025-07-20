import ImageCarousel from "../components/ImageCaroussel";

const Aroeira = () => (
  <div>
    <p className="justified-text">
      a aroeira é uma árvore nativa pioneira da Mata Atlântica, que existe na oresta em abundância e onde podemos coletar o fruto (pimenta rosa, uso em culinária e cosmética), a folha e a casca (uso em chá medicinal).
    </p>
    <ImageCarousel
      images={[
        "/assets/coletar/aroeira-1.webp",
        "/assets/coletar/aroeira-2.webp",
        "/assets/coletar/aroeira-3.webp",
        "/assets/coletar/aroeira-4.webp",
        "/assets/coletar/aroeira-5.webp"
      ]}
    />
  </div>
);

export default Aroeira;