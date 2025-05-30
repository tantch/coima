import ImageCarousel from "../components/ImageCaroussel";

const Fertilizantes = () => (
  <div>
    <p>
      a reciclagem do esterco bovino, pela ação de minhocas vermelhas (húmus) e dos resíduos orgânicos (compostagem), em conjunto como saneamento e armazenamento das águas estercadas do curral, produzem nossa gama de fertilizantes biológicos.
    </p>
    <ImageCarousel
      images={[
        "/assets/reciclar/fertelizantes-1.webp",
        "/assets/reciclar/fertelizantes-2.webp",
        "/assets/reciclar/fertelizantes-3.webp",
        "/assets/reciclar/fertelizantes-4.webp"
      ]}
    />
  </div>
);

export default Fertilizantes;