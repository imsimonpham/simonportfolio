import React, { useState, useEffect } from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  makeStyles,
} from "@material-ui/core";
import GlobalStyle from "./globalStyles";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import DrawerMenu from "./components/DrawerMenu";
import Projects from "./components/Projects";
import ParticleBackground from "./components/ParticleBackground";
import Contact from "./components/Contact";
import { Colors } from "./data/Variables";
import Footer from "./components/Footer";
import BackToTopRocket from "./components/BackToTopRocket";
import ScrollToTop from "./components/ScrollToTop";
import { animateScroll as scroll } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";

const theme = createTheme({
  palette: {
    secondary: {
      main: `${Colors.lightGreen}`,
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  shape: {
    borderRadius: 0,
  },
});

const useStyles = makeStyles((theme) => {
  return {
    body: {
      height: "100%",
      width: "100%",
      backgroundImage: `linear-gradient(
        to right top,
        #d16ba5,
        #c777b9,
        #ba83ca,
        #aa8fd8,
        #9a9ae1,
        #8aa7ec,
        #79b3f4,
        #69bff8,
        #52cffe,
        #41dfff,
        #46eefa,
        #5ffbf1
      )`,
      padding: "2rem",
      zIndex: "0",
      [theme.breakpoints.down("xs")]: {
        padding: `1rem`,
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
    },
    particleBg: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  };
});

function App({ props }) {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  //scroll to top
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  //animation
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTop />
      <GlobalStyle />
      <section className={classes.body}>
        <ParticleBackground className={classes.particleBg} />
        <Hero openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        <DrawerMenu openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
        <a
          href="#projects"
          smooth={true}
          offset={-70}
          duration={500}
          onClick={scrollToTop}
        >
          <BackToTopRocket />
        </a>
      </section>
    </ThemeProvider>
  );
}

export default App;
