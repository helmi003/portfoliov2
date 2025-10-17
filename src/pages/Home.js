import React from "react";
import profile from "../assets/images/cropped image.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProjectDiv from "../components/ProjectDiv";
import data from "../data/data";
import { Box, Grid2, Typography, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import classes from "../components/Layout/Layout.module.scss";

const Home = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [text] = useTypewriter({
    words: [
      t("I Engineer Ideas into Reality"),
      t("I love Building Things"),
      t("I Thrive on Problem-Solving"),
      t("I Create with Purpose"),
      t("I Design Functional Experiences"),
      t("I Shape the Future Through Code"),
      t("I Code to Make a Difference"),
      t("I Build with Precision and Passion"),
    ],
    loop: 0,
  });
  const services = [
    {
      id: 1,
      icon: <DesignServicesIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "UI/UX",
      description: t(
        "I do ui/ux design for both mobile and web that it helps to get a unique look"
      ),
    },
    {
      id: 2,
      icon: <CodeIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Web Dev",
      description: t(
        "I also develop websites. I always try to create high performance websites"
      ),
    },
    {
      id: 3,
      icon: <PhoneIphoneIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: t("app Dev"),
      description: t(
        "I develop mobile application. I create mobile app with Flutter"
      ),
    },
  ];
  return (
    <Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box sx={{ maxWidth: 700 }}>
          <Typography alignItems="center" variant="h4" sx={{ fontWeight: 800 }}>
            {t("hi")}{" "}
            <Typography
              component="span"
              variant="inherit"
              sx={{ color: theme.palette.primary.main }}
            >
              Helmi Ben Romdhane
            </Typography>{" "}
            <Box>
              {text}
              <Cursor cursorColor={theme.palette.primary.main} />
            </Box>
            <Typography
              variant="inherit"
              sx={{ color: theme.palette.secondary.main }}
            >
              {t("Mobile and Web Developer")}
            </Typography>
            {t("Life Long Learner")}
          </Typography>
        </Box>
        <Box
          component="img"
          src={profile}
          alt="Profile_picture"
          height={350}
          sx={{
            display: "block",
            mx: { xs: "auto", sm: 0 },
            mt: { xs: 3, sm: 0 },
          }}
        />
      </Box>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          {t("About")}{" "}
          <Link
            to="/About"
            style={{
              color: theme.palette.primary.main,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <ArrowForwardIcon fontSize="small" />
            {t("Read more")}
          </Link>
        </Typography>
        <Typography variant="body1" maxWidth={900} textAlign="justify">
          {t("I_am_a_mobile_and_web_developer")}
        </Typography>
      </Box>
      <Box className={classes.block}>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          marginY={6}
        >
          <Typography variant="body1" sx={{ fontWeight: 800 }}>
            {t("What i can do")}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 800 }}>
            {t("Services")}
          </Typography>
        </Box>
        <Box
          display="flex"
          gap={3}
          flexWrap="wrap"
          justifyContent="space-around"
        >
          {services.map((service) => (
            <Box
              key={service.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                maxWidth: 300,
              }}
            >
              {service.icon}
              <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className={classes.block}>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          marginY={6}
        >
          <Typography variant="body1" sx={{ fontWeight: 800 }}>
            {t("some of my recent works")}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 800 }}>
            {t("Projects")}
          </Typography>
        </Box>
        <Grid2
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          {data.slice(-3).map((project) => (
            <ProjectDiv project={project} key={project.id} />
          ))}
        </Grid2>
        <br />
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            textAlign: "center",
            alignItems: "center"
          }}
        >
          <Box
            component={Link}
            to="/Portfolio"
            sx={{
              color: "secondary.main",
              textDecoration: "none",
              position: "relative",
              padding: "4px 0",
              transition: "color 0.3s ease",
              display: "inline-block",
              '&::after': {
                content: '""',
                position: "absolute",
                width: 0,
                height: 3,
                bottom: 0,
                left: "50%",
                backgroundColor: "primary.main",
                transition: "all 0.3s ease",
                transform: "translateX(-50%)",
              },
              '&:hover': {
                color: "primary.main",
                '&::after': {
                  width: "100%",
                  height: 4,
                }
              }
            }}
          >
            {t("View more projects")}
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
