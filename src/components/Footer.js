import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Colors } from "../data/Variables";

const useStyles = makeStyles((theme) => {
  return {
    footer: {
      height: "100px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      borderRadius: "0.5rem",
      justifyContent: "flex-start",
      alignItems: "center",
      background: `linear-gradient(to right bottom, rgba(255,255,255, 0.2), rgba(255,255,255,0.1))`,
      backdropFilter: `blur(0.2rem)`,
      maxWidth: "1500px",
    },
  };
});

const Footer = () => {
  const classes = useStyles();
  return <footer className={classes.footer}>hello</footer>;
};

export default Footer;
