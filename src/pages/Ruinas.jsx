import ImageCarousel from "../components/ImageCaroussel";

const Ruinas = () => (
  <div>
    <p>a presença de vestígios construídos na atual parcela de terreno da fazenda, revela outras delimitações e ocupações humanas, outras histórias que precisamos ver,
ouvir e sentir, são parte de nossa existência ancestral, da cultura que nos criou, do valor dos recursos naturais que hoje desprezamos e destruímos, em prol da
tecnologia e do consumismo imediato.</p>
    <ImageCarousel
      images={[
        "/assets/procurar/ruinas-1.webp",
        "/assets/procurar/ruinas-2.webp",
        "/assets/procurar/ruinas-3.webp",
        "/assets/procurar/ruinas-4.webp",
        "/assets/procurar/ruinas-5.webp",
        "/assets/procurar/ruinas-6.webp",
        "/assets/procurar/ruinas-7.webp",
        "/assets/procurar/ruinas-8.webp",
      ]}
    />
  </div>
);

export default Ruinas;