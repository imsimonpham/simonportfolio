import { Box, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Colors } from "../data/Variables";

const useStyles = makeStyles((theme) => {
  return {
    heroContainer: {
      height: "600px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      borderRadius: "0.5rem",
      background: `${Colors.white}`,
      background: `linear-gradient(to right bottom, rgba(255,255,255, 0.4), rgba(255,255,255,0.1))`,
      border: `1px solid ${Colors.white}`,
      backdropFilter: `blur(50rem)`,
    },
    introTextContainer: {
      flexGrow: "1",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
      padding: `0 2rem`,
      "& h1": {
        marginBottom: "2rem",
      },
    },
    btnContainer: {
      display: "flex",
      justifyContent: "center",
    },
    btn: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "45px",
      width: "150px",
      textDecoration: "none",
      textTransform: "uppercase",
      borderRadius: "0.6rem",
      position: "relative",
      transition: `all 0.5s ease-in-out`,
      border: `1px solid ${Colors.primary}`,
      zIndex: "1",
      "&:first-child": {
        marginRight: "3rem",
      },
    },
    btnOverlay: {
      position: "absolute",
      height: "100%",
      width: "100%",
      borderRadius: "0.5rem",
      border: "none",
      zIndex: "-1",
      transition: `all 0.5s ease-in-out`,
      backgroundImage: `linear-gradient(to left, ${Colors.transparent} 50%,${Colors.primary} 0)`,
      backgroundSize: `200% 200%`,
    },
  };
});

const Hero = () => {
  const classes = useStyles();
  const [btnHovered, setBtnHovered] = useState(false);
  const [btnHovered2, setBtnHovered2] = useState(false);

  let style = {
    hover: {
      backgroundPosition: btnHovered ? `left` : `right`,
    },
    hover2: {
      backgroundPosition: btnHovered2 ? `left` : `right`,
    },
    btn: {
      color: btnHovered ? `${Colors.white}` : `${Colors.primary}`,
    },
    btn2: {
      color: btnHovered2 ? `${Colors.white}` : `${Colors.primary}`,
    },
  };

  return (
    <Box className={classes.heroContainer}>
      <Navbar />
      <Box className={classes.introTextContainer}>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          pariatur dolorum doloribus nisi nihil quaerat, exercitationem sequi
          porro sapiente veniam?
        </h1>

        <div className={classes.btnContainer}>
          <Link
            to="/"
            className={classes.btn}
            style={style.btn}
            onMouseEnter={() => {
              setBtnHovered(true);
            }}
            onMouseLeave={() => {
              setBtnHovered(false);
            }}
          >
            See My Work
            <span style={style.hover} className={classes.btnOverlay}></span>
          </Link>

          <Link
            to="/"
            className={classes.btn}
            style={style.btn2}
            onMouseEnter={() => {
              setBtnHovered2(true);
            }}
            onMouseLeave={() => {
              setBtnHovered2(false);
            }}
          >
            Contact Me
            <span style={style.hover2} className={classes.btnOverlay}></span>
          </Link>
        </div>
      </Box>
    </Box>
  );
};

export default Hero;
