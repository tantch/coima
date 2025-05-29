import ImageCarousel from "../components/ImageCaroussel";

const Phibra = () => (
  <div>
    <p>2017</p>
    <p>o desenho da poltrona e do banco baseia-se na autonomia entre os apoios -placas de plástico reciclado- e os assentos -volumes maciços formados por um compósito orgânico que alia a resistência das fibras da bananeira com a dureza da resina vegetal de poliuretano, feita à base de óleo de mamona-.
as fibras, oriundas do abate obrigatório do pseudocaule da bananeira após a colheita do fruto, passam pelo corte, desagregação e secagem ao sol e, depois de
misturadas com a resina vegetal, são prensadas dentro de moldes, num processo totalmente artesanal e sustentável, pela ausência de energia e lixo.
a montagem dos componentes é feita simplesmente por encaixe.
é uma proposta alternativa que interpreta a tradição do uso das fibras no mobiliário brasileiro que, sendo uma matéria prima sem valor comercial, reduz os custos de
produção, tornando-se acessível a um público consciente da responsabilidade ambiental.</p>
  <ImageCarousel
      images={[
        "/coima/assets/transformar/phibra-1.webp",
        "/coima/assets/transformar/phibra-2.webp",
        "/coima/assets/transformar/phibra-3.webp",
        "/coima/assets/transformar/phibra-4.webp",
        "/coima/assets/transformar/phibra-5.webp",
        "/coima/assets/transformar/phibra-6.webp",
      ]}
    />
  </div>
);

export default Phibra;