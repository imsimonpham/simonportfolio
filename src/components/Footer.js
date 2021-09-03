import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Colors } from "../data/Variables";

const useStyles = makeStyles((theme) => {
  return {
    footer: {
      height: "100px",
      width: "100%",
      display: "flex",
      borderRadius: "0.5rem",
      alignItems: "center",
      justifyContent: "space-around",
      background: `linear-gradient(to right bottom, rgba(255,255,255, 0.2), rgba(255,255,255,0.1))`,
      backdropFilter: `blur(0.2rem)`,
      maxWidth: "1500px",
      [theme.breakpoints.down("xs")]: {
        height: "auto",
        padding: ` 2rem 0`,
      },
      "& > a": {
        textDecoration: "none",
        color: `${Colors.black}`,
        fontWeight: "700",
        "&:hover": {
          color: `${Colors.primary}`,
        },
        fontSize: "1rem",
        [theme.breakpoints.down("xs")]: {
          display: "none",
        },
      },
    },
    name: {
      // textTransform: "uppercase",
      fontWeight: "700",
      color: `${Colors.black}`,
      fontSize: "1.2rem",
      "& span": {
        margin: "0",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.3rem",
      },
    },
  };
});

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <div className={classes.name}>{currentYear} &copy; Simon Pham</div>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </footer>
  );
};

export default Footer;
