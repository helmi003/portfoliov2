import { Box, Typography } from "@mui/material";

function ErrorMessage({ children }) {
  return (
    <Box display="flex"
      justifyContent="center"
      alignItems="center"
      height="60vh"
      textAlign="center"
    >
      <Typography variant="h6" sx={{ fontWeight: 800 }} color="error">
        {children}
      </Typography>
    </Box>
  );
}
export default ErrorMessage;
