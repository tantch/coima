import ImageCarousel from "../components/ImageCaroussel";

const Banco = () => (
  <div>
    <p>2025</p>
    <p>o banco aroeira é uma reexão sobre o ‘sentar’ a partir do trono indígena, como consciência do significado ecológico dos nossos hábitos e como responsabilidade
cultural e política do design.
é resposta a um novo material desenvolvido pela coima, denominado recoal, que consiste na aglutinação de carvão vegetal (produzido com resíduos de madeira
descartados pelas árvores da oresta, em pequenos fornos móveis, que operam nos próprios locais de coleta) com uma resina de poliuretano vegetal (feita à base de
óleo da planta mamona - ricinus communis L.).
o desenho do volume é o mínimo necessário para garantir à massa de carvão, uma estrutura suficientemente sólida e sua construção é totalmente artesanal, numa
única operação de moldagem e prensagem a frio, sem consumo de energia.
a durabilidade do recoal, conseguida pela carbonização e a redução drástica do peso da madeira pela desidratação, permite seu uso tanto em áreas interiores
como exteriores, com grande resistência ás intempéries e facilidade de manuseio.
Acrescenta à forte característica sustentável do objeto, a ausência do uso de água e da produção de lixo em qualquer fase do processo de fabrico.</p>
<ImageCarousel
      images={[
        "/coima/assets/transformar/banco-1.webp",
        "/coima/assets/transformar/banco-2.webp",
        "/coima/assets/transformar/banco-3.webp",
        "/coima/assets/transformar/banco-4.webp",
        "/coima/assets/transformar/banco-5.webp"
      ]}
    />
  </div>
);

export default Banco;