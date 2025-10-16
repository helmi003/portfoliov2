import React, { useState } from "react";
import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import media from "../data/memories/images";
import FullscreenImageDialog from "../components/FullscreenImageDialog";

const Memories = () => {
  const { t } = useTranslation();
  const lang = cookies.get("i18next") || "en";
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

  return (
    <Box>
      <Typography
        align="center"
        variant="h4"
        maxWidth={850}
        sx={{ fontWeight: 600, margin: "0 auto", marginBottom: 5 }}
      >
        {t("memories text")}
      </Typography>
      <ImageList
        variant="masonry"
        cols={3}
        gap={10}
        sx={{
          width: "100%",
          margin: "0 auto",
          "& img, & video": {
            transition: "transform 0.4s ease, filter 0.4s ease",
            borderRadius: "10px",
          },
          "& .item-container:hover img, & .item-container:hover video": {
            transform: "scale(1.07)",
            filter: "brightness(0.6)",
          },
          "& .overlay": {
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
            opacity: 0,
            transition: "opacity 0.4s ease",
            padding: "0 8px",
            fontSize: "0.9rem",
          },
          "& .item-container:hover .overlay": {
            opacity: 1,
          },
        }}
      >
        {[...media].reverse().map((item) => (
          <ImageListItem
            key={item.id}
            className="item-container"
            sx={{
              position: "relative",
              cursor: "pointer",
              overflow: "hidden",
              borderRadius: "12px",
            }}
            onClick={() => handleOpen(item)}
          >
            {item.type === "image" ? (
              <img
                src={item.file}
                alt={item.title}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <video
                src={item.file}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                muted
              />
            )}
            <Box className="overlay">
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {lang === "en" ? item.title : item.titleFR}
              </Typography>
              <Typography variant="body2">{item.placeDate}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {lang === "en" ? item.description : item.descriptionFR}
              </Typography>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
      <FullscreenImageDialog open={open} handleClose={handleClose} selectedItem={selectedItem} />
    </Box>
  );
};

export default Memories;