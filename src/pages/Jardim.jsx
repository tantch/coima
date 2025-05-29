import ImageCarousel from "../components/ImageCaroussel";

const Jardim = () => (
  <div>
    <p>2019 - virada sustentável, parque lage, rio de janeiro</p>
    <p>2020 - estação jardingá, rppn vale verdejante, andrade costa</p>
    <p>2023 - retomada cultural, museu casa da hera, vassouras</p>
    <p>sistema de reorestamento com espécies epífitas (orquídeas e bromélias)</p>
    <p>plantas nativas integradas a vasos artesanais biodegradáveis, elaborados de acordo com as necessidades físicas de cada espécie, como umidade, temperatura e
disponibilidade de nutrientes.</p>
    <p>organismos vegetais suspensos que permitem deslocações ao final de cada ciclo de polinização ou de dispersão de sementes- matrizes móveis capazes de revitalizar
    territórios selecionados, pela reposição ou multiplicação de espécies ameaçadas ou extintas.</p>
    <p>disseminação destas espécies através de uso ornamental, em ambientes urbanos, públicos ou privados, abertos ou fechados, que conscientizam a participação num
    projeto para a prservação do bioma da mata Atlântica.</p>
    <ImageCarousel
      images={[
        "/coima/assets/restaurar/jardim-1.webp",
        "/coima/assets/restaurar/jardim-2.webp",
        "/coima/assets/restaurar/jardim-3.webp",
        "/coima/assets/restaurar/jardim-4.webp",
        "/coima/assets/restaurar/jardim-5.webp",
        "/coima/assets/restaurar/jardim-6.webp",
        "/coima/assets/restaurar/jardim-7.webp",
        "/coima/assets/restaurar/jardim-8.webp",
        "/coima/assets/restaurar/jardim-9.webp",
        "/coima/assets/restaurar/jardim-10.webp"
      ]}
    />
  </div>
);

export default Jardim;