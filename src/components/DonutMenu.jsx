import { useState } from 'react';
import './DonutMenu.css';

const pages = [
  {
    label: 'nutrir',
    className: 'nutrir',
    description: 'cadeia energética necessária para o exercício da vida (seja na espécie animal ou vegetal), para continuar a respeitar a ancestralidade da permanência',
    submenu: [
      { name: "plantar", items: [{name: "pastagens", value: "pastagens"}]},
      { name: "reciclar", items: [{name: "fertilizantes orgânicos", value: "fertilizantes"}]},
      { name: "coletar", items: [{name: "aroeira", value: "aroeira"}]},
      { name: "reflorestar", items: [{name: "agrofloresta", value: "agrofloresta"}]},
    ]
  },
  { 
    label: 'habitar', 
    className: 'habitar',
    description: 'estruturas artificiais com condições para sobrevivência, espaços físicos construídos que podem desenvolver culturas e participar nos ecossistemas', 
    submenu: [
      { name: "restaurar", items: []},
      { name: "transformar", items: []},
      { name: "conjugar", items: []},
      { name: "preservar", items: []},
    ] 
  },
  {
    label: 'comunicar',
    className: 'comunicar',
    description: 'observação permanente sobre o outro e o mundo, participar na diversidade das linguagens, descobrir identidades comuns e construir novas coletividades',
    submenu: [
      { name: "procurar", items: []},
      { name: "informar", items: []},
      { name: "compartilhar", items: []},
      { name: "inovar", items: []},
    ] },
];

const DonutMenu = ({ setCurrentPage, currentPage, setCurrentMenu, currentMenu }) => {

  const [mainHover, setMainHover] = useState(null);
  const [subHover, setSubHover] = useState(null);


  return (
    <nav className={`main-menu`}>
      <div className="donut-menu pt-4">
        {pages.map((page, index) => (
          <div
            key={index}
            className={`donut-item cursor-pointer ${pages?.[index]?.className} ${currentMenu === index || mainHover === index ? 'focus' : ''}`}
            onClick={() => {
              setCurrentPage(null);
              setCurrentMenu(index);
            }}
            onMouseEnter={() => {
              setSubHover(null);
              setMainHover(index)
            }}
            onMouseLeave={() => {
              if(mainHover === index){
                setMainHover(null);
              }
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
            className={`donut-label flex items-end cursor-pointer ${pages?.[index]?.className} ${currentMenu === index || mainHover === index ? 'focus' : ''}`}
            onClick={() => {
              setCurrentPage(null);
              setCurrentMenu(index);
            }}
            onMouseEnter={() => {
              setMainHover(index)
            }}
            onMouseLeave={() => {
              if(mainHover === index){
                setMainHover(null);
              }
            }}
          >
            <p className="mb-0 leading-none">{page.label}</p>
          </div>
        ))}
      </div>
      <div className={`menu-description py-8 ${pages?.[currentMenu]?.className}`}>
        {currentMenu !== null && pages[currentMenu].description}
      </div>
      <div className={`submenu ${pages?.[currentMenu]?.className} pb-8`}>
        {currentMenu !== null && (
          <div>
            <div className="donut-menu pt-4">
              {pages[currentMenu].submenu.map((page, index) => (
                <div 
                  key={index}
                  onClick={() => setCurrentPage(page.name)}
                  className={`donut-item focus`}
                >
                  <div
                    className="cursor-pointer"
                  />
                </div>
              ))}
            </div>
            <div className="donut-labels text-4xl pt-4">
              {pages[currentMenu].submenu.map((page, index) => (
                <div
                  key={index}
                >
                  <div
                    className={`donut-label focus`}
                  >
                    {page.name}
                  </div>
                  <div className="page-items">
                    {page.items.map((item, itemIndex) => (
                      <button
                        key={itemIndex}
                        className={`text-lg cursor-pointer ${currentPage === item.value || subHover == item.value ? 'focus' : ''}`}
                        onClick={() => setCurrentPage(item.value)}
                        onMouseEnter={() => {
                          setSubHover(item.value);
                        }}
                        onMouseLeave={() => {
                          setSubHover(null);
                        }}
                      >
                        {item.name}
                      </button>  
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DonutMenu;
