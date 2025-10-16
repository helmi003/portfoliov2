import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cookies from "js-cookie";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import ParagraphHighliter from "./ParagraphHighliter";

function ProjectDiv({ project, search }) {
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
      sx={{
        maxWidth: 400,
        borderRadius: 4,
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.35s ease, box-shadow 0.35s ease",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
        "&:hover": {
          transform: "translateY(-6px) scale(1.02)",
          boxShadow: "0px 10px 25px rgba(0,0,0,0.25)",
        },
      }}
      onClick={() => navigate(`/Portfolio/${project.id}`)}
    >
      <CardActionArea>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              height: 200,
              objectFit:
                imageAspectRatio && imageAspectRatio > 1 ? "cover" : "contain",
              transition: "transform 0.6s ease",
              "&:hover": {
                transform: "scale(1.08)",
              },
            }}
            image={project.screenshots[0]}
            title={project.title}
          />
        </Box>
        <CardContent>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "1.2rem",
              mb: 1,
              textTransform: "capitalize",
            }}
          >
            <ParagraphHighliter
              title={project.title}
              search={search}
            />
          </Typography>

          <Box
            sx={{ mb: 1 }}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2" color="text.secondary">
              <ParagraphHighliter
                title={lang === "en" ? project.type : project.typeFR}
                search={search}
              />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <ParagraphHighliter
                title={lang === "en" ? project.place : project.placeFR}
                search={search}
              />
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              WebkitLineClamp: 3,
              textOverflow: "ellipsis",
              mb: 1,
            }}
          >
            <ParagraphHighliter
              title={lang === "en" ? project.about : project.aboutFR}
              search={search}
            />
          </Typography>
          <Chip
            color="default"
            label={<ParagraphHighliter
              title={lang === "en" ? project.date : project.dateFR}
              search={search}
            />}
            sx={{
              fontWeight: 600,
              borderRadius: "8px",
            }}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProjectDiv;
