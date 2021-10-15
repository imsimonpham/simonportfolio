import { Box, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { Colors } from "../data/Variables";
import Typewritter from "typewriter-effect";
import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles((theme) => {
  return {
    heroContainer: {
      height: "90vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      borderRadius: "0.5rem",
      background: `${Colors.white}`,
      background: `linear-gradient(to right bottom, rgba(255,255,255, 0.2), rgba(255,255,255,0.1))`,
      backdropFilter: `blur(0.2rem)`,
      marginBottom: "5rem",
      maxWidth: "1500px",
    },
    introTextContainer: {
      flexGrow: "1",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "left",
      padding: `0 6rem`,
      [theme.breakpoints.down("xs")]: {
        padding: `4rem 1rem`,
      },
      "& h1": {
        fontSize: "3rem",
        marginBottom: "4rem",
        fontWeight: "700",
        textShadow: `1px 1px ${Colors.primary}`,
        borderLeft: `3px solid ${Colors.white}`,
        paddingLeft: `2rem`,
        [theme.breakpoints.down("sm")]: {
          fontSize: "2rem",
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: "1.2rem",
          paddingLeft: "0.5rem",
        },
        "& span": {
          color: `${Colors.primary}`,
          textShadow: `1px 1px ${Colors.black}`,
          fontSize: "3.2rem",
          [theme.breakpoints.down("sm")]: {
            fontSize: "2rem",
          },
          [theme.breakpoints.down("xs")]: {
            fontSize: "1.2rem",
            paddingLeft: "0.5rem",
          },
        },
      },
    },
    typewritterContainer: { display: "inline-block" },
    btnContainer: {
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
      },
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
      fontWeight: "700",
      background: `${Colors.transparent}`,
      "&:first-child": {
        margin: `0 3rem 0 0`,
        [theme.breakpoints.down("xs")]: {
          margin: `0 0 1.5rem 0`,
        },
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
      cursor: "pointer",
    },
    btnOverlay: {
      position: "absolute",
      height: "100%",
      width: "100%",
      borderRadius: "0.5rem",
      border: "none",
      zIndex: "-1",
      transition: `all 0.5s ease-in-out`,
      backgroundSize: `200% 200%`,
      top: "0",
      left: "0",
    },
    btnBg1: {
      backgroundImage: `linear-gradient(to left, ${Colors.glass} 50%,${Colors.primary} 0)`,
    },
    btnBg2: {
      backgroundImage: `linear-gradient(to left, ${Colors.glass} 50%,${Colors.lightGreen} 0)`,
    },
  };
});

const Hero = (props) => {
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
      color: btnHovered2 ? `${Colors.black}` : `${Colors.primary}`,
    },
    typewritter: {
      display: "inline",
    },
  };

  return (
    <Box className={classes.heroContainer} id="home">
      <Navbar
        openDrawer={props.openDrawer}
        setOpenDrawer={props.setOpenDrawer}
      />
      <Box className={classes.introTextContainer}>
        <h1>
          Hello, World! I'm Simon, a Frontend Developer. I love building
          <span> aesthetically pleasing</span> websites and web applications.
        </h1>

        <div className={classes.btnContainer}>
          <Link
            to="projects"
            smooth={true}
            offset={-70}
            duration={500}
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
            <span
              style={style.hover}
              className={`${classes.btnOverlay} ${classes.btnBg1}`}
            ></span>
          </Link>

          <Link
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}
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
            <span
              style={style.hover2}
              className={`${classes.btnOverlay} ${classes.btnBg2}`}
            ></span>
          </Link>
        </div>
      </Box>
    </Box>
  );
};

export default Hero;
