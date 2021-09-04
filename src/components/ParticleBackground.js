import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import particlesConfig from "../config/particleConfig";

const ParticleBackground = () => {
  const [smallScreenSize, setSmallScreenSize] = useState(false);

  const resizeDectection = () => {
    if (window.innerWidth <= 960) {
      setSmallScreenSize(true);
    } else {
      setSmallScreenSize(false);
    }
  };

  useEffect(() => {
    const watchResize = () => {
      window.addEventListener("resize", resizeDectection);
    };
    watchResize();
  }, []);

  let style = {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    display: smallScreenSize ? "none" : "block",
  };

  return <Particles style={style} params={particlesConfig} />;
};

export default ParticleBackground;
