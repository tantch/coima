import ImageCarousel from "../components/ImageCaroussel";

const Agrofloresta = () => (
  <div>
    <p className="justified-text">
      sistemas agro florestais para recuperação do solo, degradado pelo desmatamento e posterior erosão, para possibilitar o aumento de armazenamento de água pela
diversificação das raízes e para desenvolver micro organismos que transformam a matéria orgânica.
    </p>
    <ImageCarousel 
      images={[
        "/assets/reflorestar/agrofloresta-1.webp",
        "/assets/reflorestar/agrofloresta-2.webp",
        "/assets/reflorestar/agrofloresta-3.webp",
        "/assets/reflorestar/agrofloresta-4.webp",
        "/assets/reflorestar/agrofloresta-5.webp"
      ]} />
  </div>
);

export default Agrofloresta;