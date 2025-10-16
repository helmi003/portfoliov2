import { useState } from "react";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import FullscreenImageDialog from "./FullscreenImageDialog";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? slides.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  return (
    <Box position="relative" width="100%" overflow="hidden">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          height: isSmallScreen ? 250 : 400,
        }}
      >
        {slides.map((slide, index) => {
          const offset = (index - currentIndex + slides.length) % slides.length;

          // compute position effect
          let transform = "translateX(0) scale(1)";
          let opacity = 1;
          let zIndex = 2;

          if (offset === 1) {
            // next image
            transform = "translateX(150px) scale(0.8)";
            opacity = 0.6;
            zIndex = 1;
          } else if (offset === slides.length - 1) {
            // previous image
            transform = "translateX(-150px) scale(0.8)";
            opacity = 0.6;
            zIndex = 1;
          } else if (offset !== 0) {
            opacity = 0;
            zIndex = 0;
          }

          return (
            <Box
              key={index}
              component="img"
              src={slide}
              onClick={() => handleOpen({ type: "image", file: slide })}
              sx={{
                position: "absolute",
                height: isSmallScreen ? 200 : 350,
                width: "auto",
                borderRadius: 3,
                boxShadow: 6,
                cursor: "pointer",
                transition: "all 0.8s ease",
                transform,
                opacity,
                zIndex,
              }}
            />
          );
        })}

        <IconButton
          onClick={goToPrevious}
          sx={{
            position: "absolute",
            left: 10,
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.background.paper,
            "&:hover": { backgroundColor: theme.palette.primary.light },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <IconButton
          onClick={goToNext}
          sx={{
            position: "absolute",
            right: 10,
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.background.paper,
            "&:hover": { backgroundColor: theme.palette.primary.light },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      <Box display="flex" justifyContent="center" gap={1} mt={2}>
        {slides.map((_, i) => (
          <Box
            key={i}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor:
                i === currentIndex
                  ? theme.palette.primary.main
                  : theme.palette.grey[400],
              transition: "background-color 0.3s",
            }}
          />
        ))}
      </Box>

      <FullscreenImageDialog
        open={open}
        handleClose={handleClose}
        selectedItem={selectedItem}
      />
    </Box>
  );
};

export default ImageSlider;
