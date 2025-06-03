import React, { useEffect, useState } from 'react';
import './TrafficLightSimulator.css';

const TrafficLightSimulator = () => {
  const [activeLight, setActiveLight] = useState('red');

  useEffect(() => {
    const lightSequence = ['red', 'yellow', 'green'];
    let currentIndex = 0;

    const cycle = setInterval(() => {
      currentIndex = (currentIndex + 1) % lightSequence.length;
      setActiveLight(lightSequence[currentIndex]);
    }, 3000);

    return () => clearInterval(cycle);
  }, []);

  const renderLight = (color) => {
    const isActive = activeLight === color;
    return <div key={color} className={`light ${color} ${isActive ? 'active' : ''}`} />;
  };

  return (
    <div className="traffic-light-container">
      {['red', 'yellow', 'green'].map(renderLight)}
    </div>
  );
};

export default TrafficLightSimulator;
