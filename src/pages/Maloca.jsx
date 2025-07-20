import ImageCarousel from "../components/ImageCaroussel";

const Maloca = () => (
  <div>
    <p>aldeia indígena krenak, resplendor, mg - 2022</p>
    <p className="justified-text">a concepção da maloca (espaço para recepção e celebração de rituais) na aldeia indígena krenak, a pedido de irani e aylton krenak, trouxe a reexão sobre como se
pode aliar o tempo ancestral da cosmovisão indígena, com o tempo atual da informação e comunicação da sociedade, onde o convívio de diferentes culturas deverá
preservar as mais frágeis.
localizada ás margens do rio uatu (rio doce), é proposta uma imersão ao nível da água sagrada através do rebaixamento do piso em terra, onde os olhos ficam ao
nível da água e com uma cobertura geodésica, representando o espaço celeste, revestida com fibras vegetais em motivos geométricos da simbologia tradicional,
aberta no centro para permitir a participação da natureza no espaço interior, através da entrada de sol, chuva e luar.
a linguagem, diálogo do antigo com o novo pretende abrir uma alternativa para o futuro, onde a sabedoria indígena possa ser incluída e respeitada.
foi realizado um modelo na escala 1:2 (metade do tamanho real) para testar a espacialidade e escala do edifício.</p>
    <ImageCarousel
      images={[
        "/assets/preservar/maloca-1.webp",
        "/assets/preservar/maloca-2.webp",
        "/assets/preservar/maloca-3.webp",
        "/assets/preservar/maloca-4.webp",
        "/assets/preservar/maloca-5.webp",
        "/assets/preservar/maloca-6.webp",
      ]}
    />
  </div>
);

export default Maloca;