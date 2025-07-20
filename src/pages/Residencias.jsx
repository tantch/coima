import ImageCarousel from "../components/ImageCaroussel";

const Residencias = () => (
  <div>
    <p className="justified-text">os desafios que fazemos aos artistas plásticos para desenvolver novos olhares sobre este espaço, com vivência num perlongado período de tempo, tem a finalidade
de promover a discussão sobre a nossa dimensão de existência funcional e sobre a nossa capacidade crítica da realidade, promovendo a criação de novas ideologias,
linguagens e sensibilidades, que nos representem e integrem na sociedade.</p>
    <h2>ana resende</h2>
    <p>2019</p>
    <h2>luna</h2>
    <p>2022</p>
    <ImageCarousel 
      images={[
        "/assets/inovar/mara-luna-1.webp",
        "/assets/inovar/mara-luna-2.webp",
        "/assets/inovar/mara-luna-3.webp",
        "/assets/inovar/mara-luna-4.webp",
        "/assets/inovar/mara-luna-5.webp"
      ]} />
    <h2>talissa</h2>
    <p>2022</p>
    <ImageCarousel 
      images={[
        "/assets/inovar/talisa-1.webp",
      ]} />
  </div>
);

export default Residencias;