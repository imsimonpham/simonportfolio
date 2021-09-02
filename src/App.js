import React, { useState } from "react";
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
  };
});

function App({ props }) {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <section className={classes.body}>
        <ParticleBackground />
        <Hero openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        <DrawerMenu openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </section>
    </ThemeProvider>
  );
}

export default App;
