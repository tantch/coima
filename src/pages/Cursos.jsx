import ImageCarousel from "../components/ImageCaroussel";

const Cursos = () => (
  <div>
    <p>a importância do conhecimento e dos saberes rurais, tradicionais ou atuais, têm de ser transmitidos e multiplicados para manter viva a permanência de uma cultura
da natureza, integrando organismos sociais em transformação, procurando estruturas coletivas mais justas e equilibradas, incluindo meios de produção alternativos
mais saudáveis e mais responsáveis.</p>
    <h2>bokashi (fertilizante)</h2>
    <p></p>
    <ImageCarousel
      images={[
        "/coima/assets/informar/bokashi-1.webp",
        "/coima/assets/informar/bokashi-2.webp",
        "/coima/assets/informar/bokashi-3.webp",
        "/coima/assets/informar/bokashi-4.webp",
        "/coima/assets/informar/bokashi-5.webp",
        "/coima/assets/informar/bokashi-6.webp",
        "/coima/assets/informar/bokashi-7.webp",
      ]}
    />
    <h2>aroeira</h2>
    <p>2021</p>
    <ImageCarousel
      images={[
        "/coima/assets/informar/aroeira-1.webp",
        "/coima/assets/informar/aroeira-2.webp",
      ]}
    />
  </div>
);

export default Cursos;