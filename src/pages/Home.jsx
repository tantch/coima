import { useState } from 'react';
import DonutMenu from "../components/DonutMenu";
import Plantar from "./Plantar";
import Reciclar from "./Reciclar";
import Coletar from "./Coletar";
import Reflorestar from "./Reflorestar";
import Transformar from "./Transformar";
import Restaurar from "./Restaurar";
import Preservar from "./Preservar";
import Conjungar from "./Conjungar";
import Procurar from "./Procurar";
import Compartilhar from "./Compartilhar";
import Inovar from "./Inovar";
import Informar from "./Informar";

const Home = () => {
  const [currentMenu, setCurrentMenu] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);

  const getCurrentPage = (p) => {
    switch (p) {
      case 'plantar':
        return <Plantar />;
      case 'reciclar':
        return <Reciclar />;
      case 'coletar':
        return <Coletar />;
      case 'reflorestar':
        return <Reflorestar />;
      case 'restaurar':
        return <Restaurar />;
      case 'transformar':
        return <Transformar />;
      case 'preservar':
        return <Preservar />;
      case 'conjugar':
        return <Conjungar />;
      case 'procurar':
        return <Procurar />;
      case 'informar':
        return <Informar />;
      case 'compartilhar':
        return <Compartilhar />;
      case 'inovar':
        return <Inovar />;
      default:
        return null;
    }
  };

  return (
    <div>
      {currentMenu=== null && (
        <div className='w-full w-screen'>
          <img className="w-full" src="images/main.jpg" />
          <p>O projeto coima é sediado em Vassouras ( Rio de Janeiro, Brasil ) e desenvolve-se na Fazenda Moinho Velho, numa propriedade com 45ha, sendo 90% da área coberta por oresta tropical (bioma da Mata Atlântica).
A metodologia do projeto, baseada na permacultura, considera o território e as ações nele realizadas como um conjunto, onde todos os processos têm lugar, desde a coleta de matérias primas, até ao seu processamento.
Pesquisa e prática de conteúdos ecológicos, sobre o equilíbrio entre a nossa existência e o lugar que ocupamos, criam contrapartidas ambientais, conscientes e responsáveis do impacto da ação humana na natureza.</p>
          <p>Rede de soluções experimentais que procuram alternativas para cuidar, restaurar, consolidar e valorizar a Mata Atlântica, com propostas alternativas, sustentáveis e pluridisciplinares, conectadas por circuitos:</p>
        </div>
      )}
      <DonutMenu setCurrentPage={setCurrentPage} currentPage={currentPage} setCurrentMenu={setCurrentMenu} currentMenu={currentMenu}/>
      <div className='mt-2'>
        {getCurrentPage(currentPage)}
      </div>
    </div>
  );
};

export default Home;
