import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cookies from "js-cookie";
import { Box, Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import classes from "./Layout/Layout.module.scss";

function ProjectDiv({ project }) {
  const lang = cookies.get("i18next") || "en";
  const navigate = useNavigate();
  const [imageAspectRatio, setImageAspectRatio] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = project.screenshots[0];
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      setImageAspectRatio(aspectRatio);
    };
  }, [project.screenshots]);
  return (
    <Card
      className={classes.block}
      onClick={() => navigate(`/Portfolio/${project.id}`)}
      sx={{ maxWidth: 400, cursor: "pointer" }}
    >
      <CardMedia
        component="img"
        sx={{
          height: 140,
          objectFit:
            imageAspectRatio && imageAspectRatio > 1 ? "fill" : "contain",
        }}
        image={project.screenshots[0]}
        title={project.title}
      />
      <CardContent>
        <Typography sx={{ fontWeight: 600 }} variant="h5" component="div">
          {project.title}
        </Typography>
        <Box
          sx={{ mb: 1 }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>
            {lang === "en" ? project.type : project.typeFR}
          </Typography>
          <Typography>
            {lang === "en" ? project.place : project.placeFR}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            color: "text.secondary",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 3,
            textOverflow: "ellipsis",
          }}
        >
          {lang === "en" ? project.about : project.aboutFR}
        </Typography>
        <Chip
          color="success"
          label={lang === "en" ? project.date : project.dateFR}
        />
      </CardContent>
    </Card>
  );
}

export default ProjectDiv;
