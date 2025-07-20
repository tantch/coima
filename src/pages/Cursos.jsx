import ImageCarousel from "../components/ImageCaroussel";

const Cursos = () => (
  <div>
    <p className="justified-text">a importância do conhecimento e dos saberes rurais, tradicionais ou atuais, têm de ser transmitidos e multiplicados para manter viva a permanência de uma cultura
da natureza, integrando organismos sociais em transformação, procurando estruturas coletivas mais justas e equilibradas, incluindo meios de produção alternativos
mais saudáveis e mais responsáveis.</p>
    <h2>bokashi (fertilizante)</h2>
    <p></p>
    <ImageCarousel
      images={[
        "/assets/informar/bokashi-1.webp",
        "/assets/informar/bokashi-2.webp",
        "/assets/informar/bokashi-3.webp",
        "/assets/informar/bokashi-4.webp",
        "/assets/informar/bokashi-5.webp",
        "/assets/informar/bokashi-6.webp",
      ]}
    />
    <h2>aroeira</h2>
    <p>2021</p>
    <ImageCarousel
      images={[
        "/assets/informar/aroeira-1.webp",
        "/assets/informar/aroeira-2.webp",
      ]}
    />
  </div>
);

export default Cursos;