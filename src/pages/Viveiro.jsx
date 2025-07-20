import ImageCarousel from "../components/ImageCaroussel";

const Viveiro = () => (
  <div>
    <p>2020</p> 
    <p className="justified-text">túnel de 15m de comprimento e 3m de raio, com estrutura arqueada e tirante central de bambu, colhido na oresta e tratado a quente para remoção dos açucares,
revestido com tela de sombreamento, apenas fixada com presilhas.
construção de baixo custo e de rápida execução, abriga mesas vazadas de tela de arame para suporte dos habitats de epífitas (bromélias e orquídeas), que abrigam
mudas produzidas no viveiro, para o reorestamento da Mata Atlântica, através do projeto jardim nômade.</p>
<ImageCarousel
      images={[
        "/assets/transformar/viveiro-1.webp",
        "/assets/transformar/viveiro-2.webp",
        "/assets/transformar/viveiro-3.webp",
        "/assets/transformar/viveiro-4.webp",
        "/assets/transformar/viveiro-5.webp",
        "/assets/transformar/viveiro-6.webp",
      ]}
    />
  </div>
);

export default Viveiro;