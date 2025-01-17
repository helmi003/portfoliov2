import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Box,
  useMediaQuery,
  useTheme,
  Link as MuiLink,
  ListItemText,
  Drawer,
  List,
  ListItem,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useTranslation } from "react-i18next";
import * as Flags from "country-flag-icons/react/3x2";
import i18next from "i18next";
import cookies from "js-cookie";
import "../styles/variables.scss";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ComputerIcon from "@mui/icons-material/Computer";
import MobileCVFR from "../assets/files/Helmi Ben Romdhane CV mobile.pdf";
import MobileCVEN from "../assets/files/Helmi Ben Romdhane CV mobile eng.pdf";
import WEBCVFR from "../assets/files/Helmi Ben Romdhane CV web.pdf";
import WEBCVEN from "../assets/files/Helmi Ben Romdhane CV web eng.pdf";

const Header = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const languages = [
    { code: "fr", name: "Français", country_code: "FR" },
    { code: "en", name: "English", country_code: "GB" },
  ];
  const currentLanguageCode = cookies.get("i18next") || "en";

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const handleLanguageChange = (code) => i18next.changeLanguage(code);

  const menuItems = [
    { label: t("About"), path: "/About" },
    { label: t("memories"), path: "/Memories" },
    { label: "Portfolio", path: "/Portfolio" },
    { label: "Contact", path: "/Contact" },
    {
      label: t("Resume"),
      path: "#",
      onClick: () => setOpenDialog(true),
    },
  ];
  const handleCloseDialog = () => setOpenDialog(false);

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: theme.palette.dark.main, padding: 1 }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <MuiLink component={Link} to="/">
          <Box component="img" src={logo} alt="Logo" height={64} />
        </MuiLink>
        {isDesktop ? (
          <Box display="flex" alignItems="center" gap={2}>
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.label}
                  component={item.external ? "a" : Link}
                  to={!item.external ? item.path : undefined}
                  href={item.external ? item.path : undefined}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  onClick={item.onClick} // Handle the onClick for Resume
                  sx={{
                    backgroundColor: isActive
                      ? theme.palette.primary.main
                      : "transparent",
                    color: isActive
                      ? theme.palette.light.main
                      : theme.palette.primary.main,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.light,
                      color: theme.palette.light.main,
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>
        ) : (
          <>
            <IconButton color="inherit" onClick={toggleMenu}>
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Drawer anchor="right" open={menuOpen} onClose={toggleMenu}>
              <Box
                sx={{
                  backgroundColor: theme.palette.dark.main,
                  width: 250,
                  height: "100%",
                }}
                role="presentation"
                onClick={toggleMenu}
                onKeyDown={toggleMenu}
              >
                <List>
                  {menuItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <ListItem
                        button
                        key={item.label}
                        component={item.external ? "a" : Link}
                        to={!item.external ? item.path : undefined}
                        href={item.external ? item.path : undefined}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noreferrer" : undefined}
                        sx={{
                          fontWeight: 600,
                          backgroundColor: isActive
                            ? theme.palette.primary.main
                            : "transparent",
                          "&:hover": {
                            backgroundColor: theme.palette.primary.light,
                          },
                        }}
                      >
                        <ListItemText
                          sx={{ color: theme.palette.light.main }}
                          primary={item.label}
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            </Drawer>
          </>
        )}
        <Box ml={2}>
          <Button
            variant="text"
            onClick={(e) => setAnchorEl(e.currentTarget)}
            startIcon={
              Flags[currentLanguageCode === "fr" ? "FR" : "GB"] &&
              React.createElement(
                Flags[currentLanguageCode === "fr" ? "FR" : "GB"],
                { width: 24, height: 16 }
              )
            }
          >
            {languages.find((lang) => lang.code === currentLanguageCode).name}
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            {languages.map(({ code, name, country_code }) => (
              <MenuItem
                key={code}
                selected={code === currentLanguageCode}
                onClick={() => {
                  handleLanguageChange(code);
                  setAnchorEl(null);
                }}
              >
                <Box display="flex" alignItems="center" gap={1}>
                  {Flags[currentLanguageCode === "fr" ? "FR" : "GB"] &&
                    React.createElement(Flags[country_code], {
                      width: 24,
                      height: 16,
                    })}
                  <Typography variant="body2">{name}</Typography>
                </Box>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle
          sx={{
            backgroundColor: theme.palette.dark.main,
            color: theme.palette.light.main,
          }}
          textAlign="center"
        >
          {t("Choose Your Preferred CV")}
        </DialogTitle>
        <DialogContent
          sx={{
            minWidth: 400,
            minHeight: 80,
            display: "flex",
            gap: 5,
            backgroundColor: theme.palette.dark.main,
            paddingY: 4,
          }}
        >
          <Button
            href={currentLanguageCode === "fr" ? MobileCVFR : MobileCVEN}
            target="_blank"
            fullWidth
            variant="contained"
            startIcon={<PhoneAndroidIcon />}
          >
            {t("Mobile CV")}
          </Button>
          <Button
            href={currentLanguageCode === "fr" ? WEBCVFR : WEBCVEN}
            target="_blank"
            fullWidth
            variant="outlined"
            startIcon={<ComputerIcon />}
          >
            {t("Web CV")}
          </Button>
        </DialogContent>
      </Dialog>
    </AppBar>
  );
};

export default Header;
