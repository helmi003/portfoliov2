import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import classes from "./Layout.module.scss";
import { Box } from "@mui/material";
import Particles from "@tsparticles/react";
import ParticlesFile from "../../assets/particlesjs-config.json";
import { loadSlim } from "@tsparticles/slim";
import { initParticlesEngine } from "@tsparticles/react";

const Layout = ({ children }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      engine.load("tsparticles", ParticlesFile);
    })
      .then(() => setInit(true))
      .catch((err) => console.error("Particles initialization failed:", err));
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Header />
      <Box
        className={classes.container}
        sx={{
          flex: 1,
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </Box>
      {init && (
        <Particles
          id="tsparticles"
          options={ParticlesFile}
          particlesLoaded={particlesLoaded}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
      )}
      <Footer />
    </Box>
  );
};

export default Layout;
