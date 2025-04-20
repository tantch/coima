import { useState } from 'react';
import './DonutMenu.css'; // Import the CSS

const pages = [
  {
    href: '/nutrir',
    label: 'nutrir',
    description: 'Nutrir description',
    submenu: [
      {name: "plantar", links: [{ href: 'pastagens', label: 'pastagens'}]},
      {name: "reciclar", links: [{ href: 'humus', label: 'húmus'},{ href: 'compostagem', label: 'compostagem'}]},
      {name: "coletar", links: [{ href: 'aroeira', label: 'aroeira'}]},
      {name: "reflorestar", links: [{ href: 'agrofloresta', label: 'agrofloresta'}]},
    ]
  },
  { href: '/habitar', label: 'habitar', description: 'Habitar description', submenu: []},
  { href: '/comunicar', label: 'comunicar', description: 'Comunicar description', submenu: []},
];

const DonutMenu = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <nav className="main-menu">
      <div className="donut-menu">
        {pages.map((page, index) => (
          <div 
            key={index}
            className={`donut-item ${hoveredIndex !== null ? (hoveredIndex === index ? 'focus' : 'unfocused' ) : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
          >
            <div />
          </div>
        ))}
      </div>
      <div className="donut-labels">
      {pages.map((page, index) => (
          <div 
            key={index}
            className={`donut-label ${hoveredIndex !== null ? (hoveredIndex === index ? 'focus' : 'unfocused' ) : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
          >
            {page.label}
          </div>
        ))}
      </div>
      <div className='menu-description'>
       {hoveredIndex !== null && pages[hoveredIndex].description}
      </div>
      <div className='submenu'>
       {hoveredIndex !== null && (
        <div>
          <div className="donut-menu">
            {pages[hoveredIndex].submenu.map((page, index) => (
              <div 
                key={index}
                className={`donut-item`}
              >
                <div />
              </div>
            ))}
          </div>
          <div className="donut-labels">
            {pages[hoveredIndex].submenu.map((page, index) => (
              <div 
                key={index}
                className={`donut-label`}
              >
                <div>{page.name}</div>
                {page.links.map((link, index) => (
                  <a key={index} href={link.href}>{link.label}</a>
                ))}
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