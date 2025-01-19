import React from "react";
import profile from "../assets/images/helmi2.png";
import { Box, Typography, Chip, useTheme, alpha } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import classes from "../components/Layout/Layout.module.scss";
import cookies from "js-cookie";
import LinkIcon from "@mui/icons-material/Link";

const About = () => {
  const { t } = useTranslation();
  const lang = cookies.get("i18next") || "en";
  const theme = useTheme();
  const educationData = [
    { label: t("School"), values: ["Dar Chaaben El Fehri"] },
    { label: t("University"), values: ["ISET Sousse", "Esprit"] },
  ];
  const skills = [
    {
      label: "FrontEnd",
      values: ["Next-js", "React-js", "Flutter", "Angular", "Symfony"],
    },
    {
      label: "BackEnd",
      values: ["Django", "Node-js", "Symfony", "Spring Boot", "Keycloak"],
    },
    {
      label: t("Data base"),
      values: ["Firebase", "MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      label: t("Languages"),
      values: [
        "Python",
        "Dart",
        "Java",
        "JavaScript",
        "CSS",
        "HTML",
        "PHP",
        "TS",
      ],
    },
    {
      label: "UI/UX",
      values: ["Figma"],
    },
  ];
  const experiences = [
    {
      company: "Neopolis",
      location: "Nabeul",
      role: t("Developer"),
      link: "/Portfolio/0",
    },
    {
      company: "AfterCode",
      location: "Nabeul",
      role: t("Developer"),
      link: "/Portfolio/3",
    },
    {
      company: "Meta Service",
      location: "Sousse",
      role: t("Developer"),
      link: "/Portfolio/6",
    },
    {
      company: "ShopMyInfluence",
      location: "Nabeul",
      role: t("Developer"),
      link: "/Portfolio/20",
    },
  ];
  const certificates = [
    {
      title:
        "Certificate Honoris Sustainability, Work Ethics and Gender Equity",
      titleFR:
        "Certificat Honoris en Développement Durable, Éthique de Travail et Égalité des Genres",
      link: "https://certificate.bcdiploma.com/check/E3F1531EE1B7D9AD430E9D68CF4219FED89CA08C0A8749AE97BF6F055D83F15CelBIZVh2LytzM0dlK2VZQmZEbG1VSmEyVk5RWXdCdnR2Y0tSU0c5Z3grSzZkdVVN",
      date: "Issued Sep 2024",
      dateFR: "Émis Sep 2024",
    },
    {
      title: "Honoris Sustainability, Work Ethics & Gender Equity Certificate",
      titleFR:
        "Certificat Honoris en Développement Durable, Éthique de Travail et Égalité des Genres",
      link: "https://certificate.bcdiploma.com/check/D5F8EBA69A750A75C0A153EBE031AF998194BB2BF70A45CC1F8683FE3776811FR0pFa0FaNEwrVzdTRUh2WEF0UFNFck5HZjd1Zkpta1NDa082cFNZYjhZaHV5eVhr",
      date: "Issued Jan 2024",
      dateFR: "Émis Jan 2024",
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      titleFR: "Diplôme de l'Académie AWS - Fondations Cloud de l'Académie AWS",
      link: "https://www.credly.com/badges/75da565a-06b7-4b54-9024-051c40f18e28/linked_in_profile",
      date: "Issued Jan 2023",
      dateFR: "Émis Jan 2023",
    },
  ];
  return (
    <Box>
      <Box
        justifyContent="space-between"
        alignItems="center"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800 }}>
            {t("hi")}{" "}
            <Typography component="span" variant="inherit" color="primary">
              Helmi Ben Romdhane
            </Typography>
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            {t("Mobile and Web Developer")}
          </Typography>
          <Typography textAlign="justify" sx={{ mt: 2, maxWidth: 800 }}>
            {t("I am from Tunisia")}
          </Typography>
          <Typography textAlign="justify" sx={{ mt: 2, maxWidth: 800 }}>
            {t("I started coding since I was in school")}
          </Typography>
          <Typography textAlign="justify" sx={{ mt: 2, maxWidth: 800 }}>
            {t(
              "I'm also working as a freelancer in my free time. During my education, I have participated in multiple clubs and hackathons to gain more experience and tackle various challenges."
            )}
          </Typography>
          <Typography textAlign="justify" sx={{ mt: 2, maxWidth: 800 }}>
            {t(
              "I am passionate about transforming ideas into functional and intuitive applications, and I am eager to contribute my skills and expertise to impactful projects."
            )}
          </Typography>
        </Box>
        <Box>
          <img
            src={profile}
            alt="Profile_picture"
            style={{ borderRadius: "50%", height: "400px" }}
          />
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography gutterBottom variant="h4" sx={{ mt: 2, fontWeight: 800 }}>
          {t("EDUCATION")}
        </Typography>
        {educationData.map((item, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "center", mb: 1, ml: 4 }}
          >
            <Typography sx={{ fontWeight: 600, width: 250 }}>
              {item.label}
            </Typography>
            {item.values.map((value, idx) => (
              <Chip
                key={idx}
                label={value}
                sx={{
                  ml: 1,
                  backgroundColor: alpha(theme.palette.secondary.main, 0.5),
                  fontWeight: 500,
                }}
              />
            ))}
          </Box>
        ))}
      </Box>
      <Box className={classes.block} sx={{ mt: 4 }}>
        <Typography gutterBottom variant="h4" sx={{ fontWeight: 800 }}>
          {t("MY SKILLS")}
        </Typography>
        {skills.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              mb: 1,
              ml: 4,
            }}
          >
            <Typography sx={{ fontWeight: 600, width: 100 }}>
              {item.label}
            </Typography>
            {item.values.map((value, idx) => (
              <Chip
                key={idx}
                label={value}
                sx={{
                  ml: 1,
                  mt: 1,
                  backgroundColor: alpha(theme.palette.secondary.main, 0.5),
                  fontWeight: 500,
                }}
              />
            ))}
          </Box>
        ))}
      </Box>
      <Box className={classes.block} sx={{ mt: 4 }}>
        <Typography gutterBottom variant="h4" sx={{ fontWeight: 800 }}>
          {t("EXPERIENCE")} : {t("Internships")}
        </Typography>
        {experiences.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              mb: 1,
              ml: 4,
            }}
          >
            <Typography sx={{ fontWeight: 600, width: 150 }}>
              {item.company}
            </Typography>
            <Chip
              label={item.location}
              sx={{
                ml: 1,
                mt: 1,
                backgroundColor: alpha(theme.palette.secondary.main, 0.5),
                fontWeight: 500,
              }}
            />
            <Chip
              label={item.role}
              sx={{
                ml: 1,
                mt: 1,
                backgroundColor: alpha(theme.palette.secondary.main, 0.5),
                fontWeight: 500,
              }}
            />
            <Link
              to={item.link}
              style={{
                color: theme.palette.primary.main,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <ArrowForwardIcon fontSize="small" /> {t("Read more")}
            </Link>
          </Box>
        ))}
      </Box>
      <Box className={classes.block} sx={{ mt: 4 }}>
        <Typography gutterBottom variant="h4" sx={{ fontWeight: 800 }}>
          {t("Certificates")}
        </Typography>
        {certificates.map((item, index) => (
          <Box
            key={index}
            sx={{
              mb: 1,
              ml: 4,
            }}
          >
            <Link
              to={item.link}
              target="_blank"
              rel="noreferrer"
              style={{
                color: theme.palette.primary.main,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <LinkIcon fontSize="small" sx={{ mr: 1 }} />
              {lang === "en" ? item.title : item.titleFR}
            </Link>
          </Box>
        ))}
      </Box>
      <Box className={classes.block} sx={{ mt: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800 }}>
          {t("Currently")}
        </Typography>
        <Typography
          textAlign="justify"
          variant="body1"
          sx={{ mt: 2, maxWidth: 800 }}
        >
          {t("I am studying at ISET Sousse")}
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
