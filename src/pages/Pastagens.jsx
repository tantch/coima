import ImageCarousel from "../components/ImageCaroussel";

const Pastagens = () => (
  <div className="h-md">
    <p>
      4,5ha de pastagens, na baixada plana da propriedade, herdaram a atividade de produção de leite (em sistema de rotação de piquetes, com manejo ecológico), depois processado em queijo e doce de leite, no laticínio local.
    </p>
    <p>
      em prática desde 2023, a parceria com a pesagro implantou o tratamento homeopático do gado, eliminando integralmente o uso de antibióticos, evitando seu
descarte para o solo e sua presença no leite (mesmo respeitando períodos de carência obrigatória).
    </p>
    <ImageCarousel
      images={[
        "/assets/plantar/pastagens-1.webp",
        "/assets/plantar/pastagens-2.webp",
        "/assets/plantar/pastagens-3.webp",
        "/assets/plantar/pastagens-4.webp",
        "/assets/plantar/pastagens-5.webp",
        "/assets/plantar/pastagens-6.webp",
        "/assets/plantar/pastagens-7.webp"
      ]}
    />
  </div>
);

export default Pastagens;