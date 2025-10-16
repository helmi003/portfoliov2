import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import cookies from "js-cookie";
import data from "../data/data";
import { Box, Typography, useTheme } from "@mui/material";
import ButtonComponent from "../components/ButtonComponent";

export default function Project() {
  const lang = cookies.get("i18next") || "en";
  const { t } = useTranslation();
  let { id } = useParams();
  const project = data[id];
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 800 }}>
        {project?.title}
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        {lang === "en" ? project?.subtitle : project?.subtitleFR}
      </Typography>
      <hr
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          height: "4px",
          borderRadius: "4px",
          backgroundColor: theme.palette.primary.main,
        }}
      />
      <Typography variant="h6" sx={{ fontWeight: 800 }}>
        {t("duration")}
      </Typography>
      <Typography variant="body1">
        {lang === "en" ? project?.date : project?.dateFR}
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 800 }}>
        {t("Type")}
      </Typography>
      <Typography variant="body1">
        {lang === "en" ? project?.type : project?.typeFR}
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 800 }}>
        {t("location")}
      </Typography>
      <Typography variant="body1">{project?.place} </Typography>
      <br />
      <Typography variant="h6" sx={{ fontWeight: 800 }}>
        Classification
      </Typography>
      <Typography variant="body1">
        {lang === "en" ? project?.about : project?.aboutFR}{" "}
      </Typography>
      <br />
      {project?.link && (
        <>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            {t("Link")}: <a href={project.link}>{project.link}</a>
          </Typography>
          <br />
        </>
      )}
      <Typography variant="h6" sx={{ fontWeight: 800 }}>
        {t("tasks")}
      </Typography>
      <ul>
        {lang === "en"
          ? project?.tasks?.map((task) => <li key={task}>{task}</li>)
          : project.tasksFR?.map((task) => <li key={task}>{task}</li>)}
      </ul>
      <br />
      <Typography variant="h6" sx={{ fontWeight: 800 }}>
        {t("Technologies")}
      </Typography>
      <ul>
        {project.technologies?.map((technologie) => (
          <li key={technologie}>{technologie}</li>
        ))}
      </ul>
      <br />
      <Typography gutterBottom variant="h6" sx={{ fontWeight: 800 }}>
        {t("Screenshots")}
      </Typography>
      <ImageSlider slides={project?.screenshots} />
      <br />
      <Typography variant="h6" sx={{ fontWeight: 800 }}>
        {t("Showcase")}
      </Typography>
      <Box gap={2} display="flex">
        {["DEMO", "SOURCE CODE"].map((text, index) => {
          const link = project?.showcase?.[index] || "";
          const isDemo = text === "DEMO";
          const variant = isDemo ? "contained" : "outlined";
          const buttonComponent = (
            <ButtonComponent
              variant={variant}
              text={text}
              loading={false}
              moreStyles={{
                cursor: link ? "pointer" : "not-allowed",
              }}
              disabled={!link}
            />
          );
          return link ? (
            <a href={link} key={text}>
              {buttonComponent}
            </a>
          ) : (
            <React.Fragment key={text}>{buttonComponent}</React.Fragment>
          );
        })}
      </Box>
    </Box>
  );
}
