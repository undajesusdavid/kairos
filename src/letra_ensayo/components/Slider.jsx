import React, { useState } from "react";
import Slide from "./Slide";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToFirst = () => {
    setCurrentIndex(0);
  };

  return (
    <div className="slider">
      <button className="first-slide-button" onClick={goToFirst}>
       Volver a la primera lamina
      </button>
      <div className="slide-count">
        {currentIndex + 1} / {slides.length}
      </div>
      <div className="slide-content">
        <Slide text={slides[currentIndex]} />
      </div>
      <div className="slider-controls">
        <button onClick={goToPrevious}>Anterior</button>
        <button onClick={goToNext}>Siguiente</button>
      </div>
    </div>
  );
};

export default Slider;
