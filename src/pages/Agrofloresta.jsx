import ImageCarousel from "../components/ImageCaroussel";

const Agrofloresta = () => (
  <div>
    <p>
      sistemas agro florestais para recuperação do solo, degradado pelo desmatamento e posterior erosão, para possibilitar o aumento de armazenamento de água pela
diversificação das raízes e para desenvolver micro organismos que transformam a matéria orgânica.
    </p>
    <ImageCarousel 
      images={[
        "/coima/assets/reflorestar/agrofloresta-1.webp",
        "/coima/assets/reflorestar/agrofloresta-2.webp",
        "/coima/assets/reflorestar/agrofloresta-3.webp",
        "/coima/assets/reflorestar/agrofloresta-4.webp",
        "/coima/assets/reflorestar/agrofloresta-5.webp"
      ]} />
  </div>
);

export default Agrofloresta;