import React from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { Box } from "@mui/material";

function Loading() {
  return (
    <Box display="flex" justifyContent="center" sx={{ height: "calc(40vh)" }}>
      <FadeLoader color={"#CD177C"} />
    </Box>
  );
}
export default Loading;
