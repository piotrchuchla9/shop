import React, { useState, useEffect, useRef } from 'react';
import { IconTruck, IconHandGrab, IconPhone, IconHammer } from '@tabler/icons-react';

const SliderComponent: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const slides = [
      { icon: <IconTruck stroke={2} size={64} color="#4e3515" />, title: 'Dostawa', subtitle: 'Pod Drzwi' },
      { icon: <IconHandGrab stroke={2} size={64} color="#4e3515" />, title: 'Odbiór Osobosty', subtitle: 'Na Terenie Krosna' },
      { icon: <IconPhone stroke={2} size={64} color="#4e3515" />, title: 'Kontakt', subtitle: 'Mailowo I Telefonicznie' },
      { icon: <IconHammer stroke={2} size={64} color="#4e3515" />, title: 'Personalizowane Zlecenia', subtitle: 'To nasza specjalność' },
    ];
  
    const resetInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 4000);
    };
  
    useEffect(() => {
      resetInterval();
  
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }, [slides.length]);
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      resetInterval();
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      resetInterval();
    };

  return (
    <div className="relative w-1/2 max-w-full overflow-hidden">
      <div className="flex transition-transform duration-1000" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="flex-none w-full flex items-center justify-center gap-4 bg-gray-400 bg-opacity-20 backdrop-blur-md p-4 text-white rounded-lg">
            {slide.icon}
            <div>
              <p className="font-bold">{slide.title}</p>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2">Prev</button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2">Next</button>
    </div>
  );
};

export default SliderComponent;
