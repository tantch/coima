import { useState } from 'react';
import './DonutMenu.css';

const pages = [
  {
    label: 'nutrir',
    description: 'cadeia energética necessária para o exercício da vida (seja na espécie animal ou vegetal), para continuar a respeitar a ancestralidade da permanência',
    submenu: [
      { name: "plantar"},
      { name: "reciclar"},
      { name: "coletar"},
      { name: "reflorestar"},
    ]
  },
  { 
    label: 'habitar', 
    description: 'estruturas artificiais com condições para sobrevivência, espaços físicos construídos que podem desenvolver culturas e participar nos ecossistemas', 
    submenu: [
      { name: "restaurar"},
      { name: "transformar"},
      { name: "conjugar"},
      { name: "preservar"},
    ] 
  },
  {
    label: 'comunicar',
    description: 'observação permanente sobre o outro e o mundo, participar na diversidade das linguagens, descobrir identidades comuns e construir novas coletividades',
    submenu: [
      { name: "procurar"},
      { name: "informar"},
      { name: "compartilhar"},
      { name: "inovar"},
    ] },
];

const DonutMenu = ({ setCurrentPage, currentPage, setCurrentMenu, currentMenu }) => {

  const [mainHover, setMainHover] = useState(null);
  const [subHover, setSubHover] = useState(null);


  return (
    <nav className="main-menu">
      <div className="donut-menu pt-4">
        {pages.map((page, index) => (
          <div
            key={index}
            className={`donut-item cursor-pointer ${currentMenu === index || mainHover === index ? 'focus' : ''}`}
            onClick={() => {
              setCurrentPage(null);
              setCurrentMenu(index);
            }}
            onMouseEnter={() => {
              setSubHover(null);
              setMainHover(index)
            }}
          >
            <div />
          </div>
        ))}
      </div>
      <div className="donut-labels text-4xl pt-4">
        {pages.map((page, index) => (
          <div
            key={index}
            className={`donut-label flex items-end cursor-pointer ${currentMenu === index || mainHover === index ? 'focus' : ''}`}
            onClick={() => {
              setCurrentPage(null);
              setCurrentMenu(index);
            }}
            onMouseEnter={() => {
              setSubHover(null);
              setMainHover(index)
            }} 
          >
            <p className="mb-0 leading-none">{page.label}</p>
          </div>
        ))}
      </div>
      <div className='menu-description py-8'>
        {currentMenu !== null && pages[currentMenu].description}
      </div>
      <div className='submenu pb-8'>
        {currentMenu !== null && (
          <div>
            <div className="donut-menu pt-4">
              {pages[currentMenu].submenu.map((page, index) => (
                <div 
                  key={index}
                  onClick={() => setCurrentPage(page.name)}
                  className={`donut-item ${currentPage === page.name || subHover === index ? 'focus' : ''}`}
                >
                  <div
                    className="cursor-pointer"
                    onMouseEnter={() => {
                      setSubHover(index);
                      setMainHover(null);
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="donut-labels text-4xl pt-4">
              {pages[currentMenu].submenu.map((page, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(page.name)}
                  onMouseEnter={() => {
                    setSubHover(index);
                    setMainHover(null);
                  }}
                  className={`donut-label cursor-pointer ${currentPage === page.name || subHover === index ? 'focus' : ''}`}
                >
                  {page.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DonutMenu;
