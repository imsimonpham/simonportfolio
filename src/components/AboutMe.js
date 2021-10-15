import React, { useState, useRef, useEffect } from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Colors } from "../data/Variables";
import ava1 from "../img/ava1.jpg";
import { TechStackData } from "../data/TechStackData";
import resume from "../resume/SimonPhamResume.pdf";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
        color: `${Colors.black}`,
        fontWeight: "600",
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
      top: "0",
      left: "0",
    },
    btnBg1: {
      backgroundImage: `linear-gradient(to left,  ${Colors.glass} 50%,${Colors.primary} 0)`,
    },
  };
});

const AboutMe = () => {
  const classes = useStyles();
  const [btnHovered, setBtnHovered] = useState(false);

  const avaRevealRef = useRef(null);
  const introRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      avaRevealRef.current,
      { autoAlpha: 0 },
      {
        duration: 1,
        autoAlpha: 1,
        ease: "none",
        scrollTrigger: {
          trigger: avaRevealRef.current,
          start: "top center+=250",
          toggleActions: "play reverse play",
        },
      }
    );
  }, []);

  let style = {
    hover: {
      backgroundPosition: btnHovered ? `left` : `right`,
    },
    btn: {
      color: btnHovered ? `${Colors.white}` : `${Colors.primary}`,
    },
  };
  return (
    <Box className={classes.container} id="about">
      <h1 className={classes.title}>
        About Me<span>.</span>
      </h1>
      <section className={classes.aboutContentWrapper}>
        <div className={classes.imgSection}>
          <div className={classes.card}>
            <div className={classes.imgContainer} ref={avaRevealRef}>
              <img src={ava1} alt="profile picture" />
            </div>
            <div className={classes.basicInfo}>
              <p>
                <b>Frontend Developer</b>
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
          <div className={classes.infoContainer} ref={introRef}>
            <p>
              Hi, my name is Simon, and I'm an aspiring Frontend Developer. Over
              the past year, programming has developed into a passion of mine,
              specifically, in the field of websites and web applications
              development. I have dedicated my time to gaining proficiency in
              frontend technologies and enjoy building aesthetically pleasing
              websites and web applications.
            </p>
            <p>
              Also, I consider myself a problem solver who seeks to bridge the
              gap between business and technology.
            </p>
          </div>
          <div className={classes.skillContainer}>
            <h2>Skills</h2>
            {TechStackData.map((item, index) => {
              return (
                <div className={classes.skillCat} key={index}>
                  <h4>{item.cat}: </h4>
                  <ul>
                    {item.techList.map((tech, index) => {
                      return <li key={index}>{tech}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          {/* <a
            href={resume}
            download="Simon Pham's resume"
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
          </a> */}
        </div>
      </section>
    </Box>
  );
};

export default AboutMe;
