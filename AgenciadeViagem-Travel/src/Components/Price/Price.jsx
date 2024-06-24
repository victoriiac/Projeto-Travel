import React, { useState } from 'react';
import italiaImage from '../../Images/italia.jpg';
import espanhaImage from '../../Images/espanha.jpg';
import japaoImage from '../../Images/japao.jpg';
import marrocosImage from '../../Images/marrocos.jpg'

import './Price.css';

const Price = () => {
  const countries = [
    {
      countryName: 'Itália',
      imageUrl: italiaImage,
      landmarks: ['Coliseu', 'Torre de Pisa', 'Veneza'],
    },
    {
      countryName: 'Espanha',
      imageUrl: espanhaImage,
      landmarks: ['Sagrada Família', 'Parque Güell', 'Alhambra'],
    },
    {
      countryName: 'Japão',
      imageUrl: japaoImage,
      landmarks: ['Monte Fuji', 'Templo Senso-ji', 'Castelo de Himeji'],
    },
    {
        countryName: 'Marrocos',
        imageUrl: marrocosImage,
        landmarks: ['Marrakech', 'Casablanca', 'Chefchaouen'],
    },
  ];

  const [showLandmarks, setShowLandmarks] = useState(null);

  const handleMouseEnter = (index) => {
    setShowLandmarks(index);
  };

  const handleMouseLeave = () => {
    setShowLandmarks(null);
  };

  return (
    <div className="app">
      <h1>Principais Pacotes</h1>
      <div className="country-list">
        {countries.map((country, index) => (
          <div
            key={index}
            className="country-card"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={country.imageUrl} alt={`Imagem de ${country.countryName}`} className="country-image" />
            {showLandmarks === index && (
              <div className="landmarks-container">
                <h3>{country.countryName}</h3>
                <ul>
                  {country.landmarks.map((landmark, idx) => (
                    <li key={idx}>{landmark}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;