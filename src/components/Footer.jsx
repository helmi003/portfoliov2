import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography, IconButton, useTheme } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      component="footer"
      display="flex"
      justifyContent="space-between"
      sx={{
        position: "absolute",
        bottom: "-120px",
        width: "100%",
        backgroundColor: theme.palette.dark.main,
        padding: 2,
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
          bottom: "-160px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          color: theme.palette.light.main,
        }}
      >
        <IconButton
          href="https://www.facebook.com/helmi.benromdhane.9"
          color="inherit"
        >
          <FacebookIcon fontSize="small" />
        </IconButton>
        <IconButton href="https://twitter.com/HelmiBenRomdha8" color="inherit">
          <TwitterIcon fontSize="small" />
        </IconButton>
        <IconButton href="https://github.com/helmi003" color="inherit">
          <GitHubIcon fontSize="small" />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/helmi-ben-romdhane/"
          color="inherit"
        >
          <LinkedInIcon fontSize="small" />
        </IconButton>
        <IconButton href="https://www.instagram.com/helmi_b.r/" color="inherit">
          <InstagramIcon fontSize="small" />
        </IconButton>
      </Box>
      <Typography
        variant="body2"
        sx={{ fontWeight: 500, color: "white" }}
      >
        <Typography component="span">
          {t("All rights reserved")} © 2022 .{" "}
        </Typography>
        <Typography component="span" color={theme.palette.primary.main}>
          Helmi Ben Romdhane
        </Typography>
      </Typography>
    </Box>
  );
};

export default Footer;
