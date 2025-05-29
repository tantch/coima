import { useRef, useState, useEffect } from 'react';
import DonutMenu from "../components/DonutMenu";
import Pastagens from "./Pastagens";
import Fertilizantes from "./Fertilizantes";
import Aroeira from "./Aroeira";
import Agrofloresta from "./Agrofloresta";
import Phibra from "./Phibra";
import Banco from "./Banco";
import Viveiro from "./Viveiro";
import Jardim from "./Jardim";
import Maloca from "./Maloca";
import Filtro from "./Filtro";
import Observatorio from "./Observatorio";
import Teia from "./Teia";
import Ruinas from "./Ruinas";
import Trilhas from "./Trilhas";
import Escalada from "./Escalada";
import Residencias from "./Residencias";
import Cursos from "./Cursos";

const Home = () => {
  const [currentMenu, setCurrentMenu] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const menuRef = useRef(null);


  useEffect(() => {
    console.log("scroll")
    if (menuRef.current && currentMenu !== null) {
      menuRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage,currentMenu]);

  const getCurrentPage = (p) => {
    console.log(p)
    switch (p) {
      case 'pastagens':
        return <Pastagens />;
      case 'fertilizantes':
        return <Fertilizantes />;
      case 'aroeira':
        return <Aroeira />;
      case 'agrofloresta':
        return <Agrofloresta />;
      case 'jardim':
        return <Jardim />;
      case 'phibra':
        return <Phibra />;
      case 'banco':
        return <Banco />;
      case 'viveiro':
        return <Viveiro />;
      case 'teia':
        return <Teia />;
      case 'observatorio':
        return <Observatorio />;
      case 'maloca':
        return <Maloca />;
      case 'filtro':
        return <Filtro />;
      case 'ruinas':
        return <Ruinas />;
      case 'cursos':
        return <Cursos />;
      case 'trilhas':
        return <Trilhas />;
      case 'escalada':
          return <Escalada />;
      case 'residencias':
        return <Residencias />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-orange-50">
      <div className='mb-12'>
        <div className="relative w-screen h-[120vh] bg-cover bg-center" style={{ backgroundImage: "url('/coima/images/main.jpg" }}>
          <img src="/coima/images/logo-white.png" alt="Logo" className="absolute top-4 left-4 h-64" />
          <div className="text-sm absolute bottom-0 px-16 py-4 text-orange-50">
            <p className="pt-1">
              - o  projeto coima é sediado em Vassouras ( Rio de Janeiro, Brasil ) e desenvolve-se na Fazenda Moinho Velho, numa propriedade com 45ha, sendo 90% da área coberta por foresta tropical (bioma da Mata Atlântica).
            </p>
            <p className="pt-1">
              - a metodologia do projeto, baseada na permacultura, considera o território e as ações nele realizadas como um conjunto, onde todos os processos têm lugar, desde a coleta de matérias primas, até ao seu processamento.
            </p>
            <p className="pt-1">
              - pesquisa e prática de conteúdos ecológicos, sobre o equilíbrio entre a nossa existência e o lugar que ocupamos, criam contrapartidas ambientais, conscientes e responsáveis do impacto da ação humana na natureza.
            </p>
            <p className="pt-1">
              - rede de soluções experimentais que procuram alternativas para cuidar, restaurar, consolidar e valorizar a Mata Atlântica, com propostas alternativas, sustentáveis e pluridisciplinares, conectadas por circuitos:
            </p>
          </div>
        </div>
      </div>
      <div
          className="px-16"
          ref={menuRef}
        >
        <DonutMenu setCurrentPage={setCurrentPage} currentPage={currentPage} setCurrentMenu={setCurrentMenu} currentMenu={currentMenu}/>
      </div>
        {currentMenu !== null && (
        <div
          className='px-16 py-4 h-screen overflow-y-scroll'
        >
          {getCurrentPage(currentPage)}
        </div>
      )}
    </div>

  );
};

export default Home;
