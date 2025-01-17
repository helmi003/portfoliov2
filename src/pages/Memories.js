import React from "react";
import media from "../data/memories/images";
import cookies from "js-cookie";
import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import handleFullscreen from "../global/globalFunctions";

const Memories = () => {
  const { t } = useTranslation();
  const lang = cookies.get("i18next") || "en";
  return (
    <Box>
      <Typography
        align="center"
        variant="h4"
        maxWidth={850}
        sx={{
          fontWeight: 600,
          margin: "0 auto",
          marginBottom: 5,
        }}
      >
        {t("memories text")}
      </Typography>

      <ImageList variant="quilted" cols={3}>
        {[...media].reverse().map((item) => (
          <ImageListItem key={item.id}>
            {item.type === "image" ? (
              <img
                src={`${item.file}?w=248&fit=crop&auto=format`}
                srcSet={`${item.file}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.id}
                loading="lazy"
                onClick={() => handleFullscreen(item.file, "image")}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <video
                src={item.file}
                controls
                onClick={() => handleFullscreen(item.file, "video")}
                style={{ cursor: "pointer", width: "100%" }}
              />
            )}
            <ImageListItemBar
              title={lang === "en" ? item.title : item.titleFR}
              subtitle={
                <>
                  <span>{item.placeDate}</span>
                  <br />
                  <span>
                    {lang === "en" ? item.description : item.descriptionFR}
                  </span>
                </>
              }
              position="top"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Memories;
