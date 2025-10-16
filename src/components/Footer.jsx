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
  const footerHeight = 80;

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: theme.palette.dark.main,
        py: 2,
        px: 3,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 1,
        zIndex: 2,
        minHeight: `${footerHeight}px`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          justifyContent: "center",
          color: theme.palette.light.main,
        }}
      >
        <IconButton href="https://www.facebook.com/helmi.benromdhane.9" color="inherit">
          <FacebookIcon fontSize="small" />
        </IconButton>
        <IconButton href="https://twitter.com/HelmiBenRomdha8" color="inherit">
          <TwitterIcon fontSize="small" />
        </IconButton>
        <IconButton href="https://github.com/helmi003" color="inherit">
          <GitHubIcon fontSize="small" />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/helmi-ben-romdhane/" color="inherit">
          <LinkedInIcon fontSize="small" />
        </IconButton>
        <IconButton href="https://www.instagram.com/helmi_b.r/" color="inherit">
          <InstagramIcon fontSize="small" />
        </IconButton>
      </Box>

      <Typography variant="body2" sx={{ color: "white", fontWeight: 500, textAlign: "center" }}>
        {t("All rights reserved")} © {new Date().getFullYear()}{" "}
        <Typography component="span" color={theme.palette.primary.main} sx={{ fontWeight: 600 }}>
          Helmi Ben Romdhane
        </Typography>
      </Typography>
    </Box>
  );
};

export default Footer;
