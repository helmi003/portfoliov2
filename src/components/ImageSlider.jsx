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
          let transform = "translateX(0) scale(1)";
          let opacity = 1;
          let zIndex = 2;

          if (offset === 1) {
            transform = "translateX(150px) scale(0.8)";
            opacity = 0.6;
            zIndex = 1;
          } else if (offset === slides.length - 1) {
            transform = "translateX(-150px) scale(0.8)";
            opacity = 0.6;
            zIndex = 1;
          } else if (offset !== 0) {
            opacity = 0;
            zIndex = 0;
          }

          const isVideo = slide.endsWith(".mp4");

          return (
            <Box
              key={index}
              sx={{
                position: "absolute",
                height: isSmallScreen ? 200 : 350,
                width: "auto",
                borderRadius: 3,
                boxShadow: 6,
                cursor: "pointer",
                overflow: "hidden",
                transition: "all 0.8s ease",
                transform,
                opacity,
                zIndex,
              }}
              onClick={() =>
                handleOpen({ type: isVideo ? "video" : "image", file: slide })
              }
            >
              {isVideo ? (
                <video
                  src={slide}
                  muted
                  autoPlay
                  loop
                  playsInline
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "inherit",
                  }}
                />
              ) : (
                <img
                  src={slide}
                  alt={`slide-${index}`}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "inherit",
                  }}
                />
              )}
            </Box>
          );
        })}

        {/* Navigation Arrows */}
        <IconButton
          onClick={goToPrevious}
          sx={{
            position: "absolute",
            left: { xs: 0, sm: 10 },
            zIndex: 5,
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.background.paper,
            "&:hover": { backgroundColor: theme.palette.primary.light },
            transform: "translateY(-50%)",
            top: "50%",
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton
          onClick={goToNext}
          sx={{
            position: "absolute",
            right: { xs: 0, sm: 10 },
            zIndex: 5,
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.background.paper,
            "&:hover": { backgroundColor: theme.palette.primary.light },
            transform: "translateY(-50%)",
            top: "50%",
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      {/* Dots Navigation */}
      <Box display="flex" justifyContent="center" gap={1} mt={2}>
        {slides.map((_, i) => (
          <Box
            key={i}
            onClick={() => setCurrentIndex(i)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              cursor: "pointer",
              backgroundColor:
                i === currentIndex
                  ? theme.palette.primary.main
                  : theme.palette.grey[400],
              transition: "background-color 0.3s, transform 0.2s",
              "&:hover": {
                transform: "scale(1.2)",
                backgroundColor: theme.palette.primary.light,
              },
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
