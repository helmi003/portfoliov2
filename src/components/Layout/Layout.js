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
      .then(() => {
        setInit(true);
      })
      .catch((err) => {
        console.error("Particles initialization failed: ", err);
      });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      <Box sx={{ position: "relative", minHeight: "85vh" }}>
        <Header />
        <Box className={classes.container}>{children}</Box>
        {init && (
          <Particles
            id="tsparticles"
            options={ParticlesFile}
            particlesLoaded={particlesLoaded}
            style={{
              position: "absolute",
              width: "100%",
              height: "calc(100vh - 100px)",
              top: "100px",
              left: 0,
              zIndex: -1,
            }}
          />
        )}
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
