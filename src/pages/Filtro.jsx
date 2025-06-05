import ImageCarousel from "../components/ImageCaroussel";

const Filtro = () => (
  <div>
    <div>2024</div>
    <div className="justified-text">
      projeto acadêmico em parceria com a universidade rural (UFRJ, seropédica), departamento de solos, para tratamento da água do ribeiro que atravessa a fazenda e da água de limpeza do curral, através de filtros de carvão (produzido com restos de madeira caída na oresta) em processo de decantação, feito com vários lagos em sucessão de níveis a jusante, aproveitando a topografia natural do terreno.
    </div>
    <ImageCarousel
      images={[
        "/assets/preservar/filtro-1.webp",
        "/assets/preservar/filtro-2.webp",
        "/assets/preservar/filtro-3.webp",
        "/assets/preservar/filtro-4.webp",
      ]}
    />
  </div>
);

export default Filtro;