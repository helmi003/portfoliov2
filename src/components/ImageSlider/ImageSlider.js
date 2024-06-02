import { useState } from "react";
import classes from "./ImageSlider.module.scss";

const ImageSlider = ({ slides }) => {
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
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className={classes.sliderStyles}>
      <div>
        <div onClick={goToPrevious} className={classes.leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} className={classes.rightArrowStyles}>
          ❱
        </div>
      </div>
      <img
        className={classes.slideStyles}
        src={slides[currentIndex]}
        alt="screenshot"
      />
      <div className={classes.dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            className={classes.dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
