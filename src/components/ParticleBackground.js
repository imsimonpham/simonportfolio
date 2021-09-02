import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "../config/particleConfig";

const ParticleBackground = () => {
  const style = {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  };
  return <Particles style={style} params={particlesConfig} />;
};

export default ParticleBackground;
