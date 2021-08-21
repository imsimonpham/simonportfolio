import React from "react";
import { Box, Typography, Button, makeStyles } from "@material-ui/core/styles";
import { CgMenuLeft } from "react-icons/cg";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Colors } from "../data/Variables";

const useStyles = makeStyles((theme) => {
  return {
    nav: {
      height: "60px",
      display: "flex",
      justifyContent: "space-between",
      padding: `0 1rem`,
      "&a": {
        textDecoration: "none",
      },
    },
    navLeft: {
      display: "flex",
      alignItems: "center",
    },
    navRight: {
      display: "flex",
      alignItems: "center",
    },
    name: {
      fontSize: "1rem",
      textTransform: "uppercase",
      fontWeight: "900",
      marginLeft: "0.5rem",
      color: `${Colors.primary}`,
    },
    bar: {
      fontSize: "1.6rem",
      color: `${Colors.primary}`,
      cursor: "pointer",
    },
    icon: {
      fontSize: "1.5rem",
      fill: `${Colors.primary}`,
      marginLeft: "0.7rem",
      transition: `all 0.5s ease-in-out`,

      "&:hover": {
        transform: `scale(1.1)`,
      },
    },
  };
});

const Navbar = (props) => {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      <div className={classes.navLeft}>
        <CgMenuLeft className={classes.bar} />
        <span className={classes.name}>Simon Pham</span>
      </div>
      <div className={classes.navRight}>
        <a href="https://github.com/imsimonpham" target="_blank">
          <AiFillGithub className={classes.icon} />
        </a>
        <a href="https://www.linkedin.com/in/imsimonpham/" target="_blank">
          <AiFillLinkedin className={classes.icon} />
        </a>
        <a href="https://www.instagram.com/imsimonpham/?hl=vi" target="_blank">
          <AiFillInstagram className={classes.icon} />
        </a>
        <a href="https://twitter.com/imsimonpham" target="_blank">
          <AiFillTwitterCircle className={classes.icon} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
