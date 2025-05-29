import ImageCarousel from "../components/ImageCaroussel";

const Filtro = () => (
  <div>
    <p>2024</p>
    <p>projeto acadêmico em parceria com a universidade rural (UFRJ, seropédica), departamento de solos, para tratamento da água do ribeiro que atravessa a fazenda e
da água de limpeza do curral, através de filtros de carvão (produzido com restos de madeira caída na oresta) em processo de decantação, feito com vários lagos
em sucessão de níveis a jusante, aproveitando a topografia natural do terreno.</p>
    <ImageCarousel
      images={[
        "/coima/assets/preservar/filtro-1.webp",
        "/coima/assets/preservar/filtro-2.webp",
        "/coima/assets/preservar/filtro-3.webp",
        "/coima/assets/preservar/filtro-4.webp",
      ]}
    />
  </div>
);

export default Filtro;