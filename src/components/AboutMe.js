import React, { useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Colors } from "../data/Variables";
import ava1 from "../img/ava1.jpg";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      height: "1000px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      borderRadius: "0.5rem",
      justifyContent: "center",
      alignItems: "center",
      background: `linear-gradient(to right bottom, rgba(0,0,0, 0.3), rgba(0,0,0,0.2))`,
      backdropFilter: `blur(0.2rem)`,
      [theme.breakpoints.down("sm")]: {
        height: "auto",
      },
      marginBottom: "5rem",
      maxWidth: "1500px",
    },
    aboutContentWrapper: {
      flexBasis: "70%",
      display: "flex",
      justifyContent: "space-around",
      margin: `0 0 2rem 0`,
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        padding: `1rem 1rem`,
      },

      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        padding: `1rem 1rem`,
        width: "100%",
      },
    },
    title: {
      margin: `0 0 2rem 0`,
      fontSize: "3.5rem",
      color: `${Colors.white}`,
      textShadow: `2px 2px ${Colors.primary}`,
      flexBasis: "10%",
      "& span": {
        color: `${Colors.primary}`,
        textShadow: "none",
      },
      [theme.breakpoints.down("sm")]: { marginTop: "1.2rem", fontSize: "3rem" },
      [theme.breakpoints.down("xs")]: {
        marginTop: "2rem",
        fontSize: "1.5rem",
      },
    },
    imgSection: {
      flexBasis: "40%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    card: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: `1.5rem`,
      height: "400px",
      width: "90%",
      background: `linear-gradient(to right bottom, rgba(0,0,0, 0.2), rgba(0,0,0,0.1))`,
      backdropFilter: `blur(4rem)`,
      borderRadius: "0.5rem",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        marginBottom: "1.5rem",
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    },
    basicInfo: {
      color: `${Colors.white}`,
      letterSpacing: "1.5px",

      "& p:first-child": {
        textTransform: "uppercase",
        color: `${Colors.white}`,
      },
      "& p:nth-child(2)": {
        color: `${Colors.gray}`,
      },
      "& span": {
        textTransform: "uppercase",
        color: `${Colors.white}`,
      },
    },
    imgContainer: {
      border: `3px solid ${Colors.white}`,
      height: "250px",
      width: "250px",
      borderRadius: "50%",
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "50%",
      },
      [theme.breakpoints.down("xs")]: {
        height: "200px",
        width: "200px",
      },
    },
    infoSection: {
      flexBasis: "55%",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      flexDirection: "column",
    },
    infoContainer: {
      height: "auto",
      width: "90%",
      marginBottom: "2rem",
      color: `${Colors.white}`,
      "& p": {
        fontSize: "1rem",
      },
    },
    skillContainer: {
      height: "auto",
      width: "90%",
      marginBottom: "2rem",
      "& h2": {
        fontSize: "2.3rem",
        color: `${Colors.white}`,
        textShadow: `2px 2px ${Colors.primary}`,
        margin: `0 0 1rem 0`,
        [theme.breakpoints.down("sm")]: {
          fontSize: "2rem",
        },
      },
    },
    skillCat: {
      display: "flex",
      height: "auto",
      alignItems: "center",
      flexWrap: "wrap",
      marginBottom: "1rem",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        alignItems: "flex-start",
      },

      "& h4": {
        margin: `0 1rem 0 0`,
        [theme.breakpoints.down("xs")]: {
          margin: `0 0 1rem 0`,
        },
      },
      "& ul": {
        listStyle: "none",
        display: "flex",
        margin: `0`,
        flexWrap: "wrap",
        padding: "0",

        "& li": {
          borderRadius: "1rem",
          padding: `0.1rem 0.5rem`,
          display: "flex",
          alignItems: "center",
          marginRight: "0.6rem",
          fontWeight: "700",
          background: `linear-gradient(to right bottom, rgba(255,255,255, 0.6), rgba(255,255,255,0.5))`,
          [theme.breakpoints.down("xs")]: {
            marginBottom: "1rem",
          },
        },
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
      outline: "none",
      border: "none",
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
    },
    btnBg1: {
      backgroundImage: `linear-gradient(to left,  ${Colors.glass} 50%,${Colors.primary} 0)`,
    },
  };
});

const AboutMe = () => {
  const classes = useStyles();
  const [btnHovered, setBtnHovered] = useState(false);

  let style = {
    hover: {
      backgroundPosition: btnHovered ? `left` : `right`,
    },
    btn: {
      color: btnHovered ? `${Colors.white}` : `${Colors.primary}`,
    },
  };
  return (
    <Box className={classes.container}>
      <h1 className={classes.title}>
        About Me<span>.</span>
      </h1>
      <section className={classes.aboutContentWrapper}>
        <div className={classes.imgSection}>
          <div className={classes.card}>
            <div className={classes.imgContainer}>
              <img src={ava1} alt="ava" />
            </div>
            <div className={classes.basicInfo}>
              <p>
                <b>Frontend Web Developer</b>
              </p>
              <p>
                <b>
                  <span>Location:</span>
                </b>{" "}
                Halifax, Nova Scotia
              </p>
            </div>
          </div>
        </div>
        <div className={classes.infoSection}>
          <div className={classes.infoContainer}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae inventore beatae reiciendis amet aliquid itaque ex
              doloremque. Ex non sit architecto nesciunt natus, corporis aut
              quae impedit quia minus voluptate dolorum sed eligendi fuga
              expedita maxime commodi tenetur esse distinctio. Nisi nemo sunt,
              reiciendis numquam architecto perspiciatis tenetur a illo.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
              deleniti, debitis alias ipsum voluptatem harum soluta aliquid!
              Debitis, dolores numquam.
            </p>
          </div>
          <div className={classes.skillContainer}>
            <h2>Skills</h2>
            <div className={classes.skillCat}>
              <h4>Languages: </h4>
              <ul>
                <li>Javascript</li>
                <li>SASS</li>
                <li>CSS3</li>
                <li>HTML5</li>
                <li>C</li>
              </ul>
            </div>
            <div className={classes.skillCat}>
              <h4>Frontend: </h4>
              <ul>
                <li>React</li>
                <li>React-Bootstrap</li>
                <li>Material-UI</li>
                <li>GSAP</li>
              </ul>
            </div>
            <div className={classes.skillCat}>
              <h4>Backend</h4>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Firebase</li>
              </ul>
            </div>
            <div className={classes.skillCat}>
              <h4>Other Tools: </h4>
              <ul>
                <li>Git</li>
                <li>Github</li>
                <li>Netlify</li>
              </ul>
            </div>
          </div>
          <button
            className={classes.btn}
            style={style.btn}
            onMouseEnter={() => {
              setBtnHovered(true);
            }}
            onMouseLeave={() => {
              setBtnHovered(false);
            }}
          >
            View My Resume
            <span
              style={style.hover}
              className={`${classes.btnOverlay} ${classes.btnBg1}`}
            ></span>
          </button>
        </div>
      </section>
    </Box>
  );
};

export default AboutMe;
