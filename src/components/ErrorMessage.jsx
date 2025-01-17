import { Box, Typography } from "@mui/material";
// import classes from "../Error/Error.module.scss";

function ErrorMessage({ children }) {
  return (
    <Box justifyContent="center" display="flex" >
      <Typography variant="h6" sx={{ fontWeight: 800 }} color="error">
        {children}
      </Typography>
    </Box>
  );
}
export default ErrorMessage;
