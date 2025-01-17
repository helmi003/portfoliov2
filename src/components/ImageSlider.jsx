import { useState } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import handleFullscreen from "../global/globalFunctions";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();

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
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          onClick={goToPrevious}
          sx={{
            color: theme.palette.primary.main,
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <ArrowBackIosNewIcon fontSize="large" />
        </IconButton>
        <img
          alt={currentIndex}
          loading="lazy"
          style={{ cursor: "pointer", maxHeight: "400px" }}
          onClick={() => handleFullscreen(slides[currentIndex], "image")}
          src={slides[currentIndex]}
        />
        <IconButton
          onClick={goToNext}
          sx={{
            color: theme.palette.primary.main,
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <ArrowForwardIosIcon fontSize="large" />
        </IconButton>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: 2, gap: 1 }}
      >
        {slides.map((slide, slideIndex) => (
          <Box
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            sx={{
              cursor: "pointer",
              fontSize: 24,
              color:
                currentIndex === slideIndex
                  ? theme.palette.primary.main
                  : theme.palette.dark.main,
            }}
          >
            ●
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ImageSlider;
