import { alpha, Box, Button, CircularProgress, useTheme } from "@mui/material";
import React from "react";

const ButtonComponent = ({
  moreStyles,
  text,
  loading,
  variant = "contained",
  ...props
}) => {
  const theme = useTheme();

  const buttonStyles = {
    ...moreStyles,
    width: "100%",
    padding: "0.75rem 1.25rem",
    backgroundColor: !loading
      ? variant === "contained"
        ? theme.palette.primary.main
        : "transparent"
      : alpha(theme.palette.primary.main, 0.5),
    color:
      variant === "outlined"
        ? theme.palette.text.primary
        : theme.palette.light.main,
    border:
      variant !== "outlined" || loading
        ? "none"
        : `1px solid ${theme.palette.primary.main}`,
    "&:hover": {
      backgroundColor: !loading ? theme.palette.secondary.main : "transparent",
      color:
        variant !== "contained"
          ? theme.palette.light.main
          : theme.palette.dark.main,
    },
  };

  return (
    <Button
      {...props}
      variant={variant}
      type="submit"
      disabled={loading}
      sx={buttonStyles}
    >
      {loading ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress size={24} color="inherit" />
        </Box>
      ) : (
        text
      )}
    </Button>
  );
};

export default ButtonComponent;
