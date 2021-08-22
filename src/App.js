import React from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  makeStyles,
} from "@material-ui/core";
import { Colors } from "./data/Variables";
import GlobalStyle from "./globalStyles";
import Hero from "./components/Hero";
import styled from "styled-components";
import Testing from "./components/Testing";
import Separator from "./components/Separator";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  shape: {
    borderRadius: 0,
  },
  overrides: {
    // Style sheet name
    MuiTouchRipple: {
      // Name of the rule
      child: {
        // Some CSS
        // backgroundColor: `${Colors.red}`,
      },
    },
  },
});

const Body = styled.div`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
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
  );
  padding: 2rem;
  position: relative;
  z-index: 0;
`;

const useStyles = makeStyles((theme) => {
  return {
    circle: {
      position: "absolute",
      zIndex: "-1",
      borderRadius: "50%",
    },
    circle1: {
      right: "8%",
      top: "35%",
      height: "50px",
      width: "50px",
      background: `${Colors.primary}`,
    },
    circle2: {
      right: "40%",
      top: "15%",
      height: "70px",
      width: "70px",
      background: `${Colors.lightGreen}`,
    },
    circle3: {
      left: "40%",
      top: "25%",
      height: "100px",
      width: "100px",
      background: `${Colors.primary}`,
    },
    circle4: {
      left: "10%",
      top: "38%",
      height: "70px",
      width: "70px",
      background: `${Colors.primary}`,
    },
    circle5: {
      left: "15%",
      top: "10%",
      height: "70px",
      width: "70px",
      background: `${Colors.lightGreen}`,
    },
  };
});

function App({ props }) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <Body>
        <div className={`${classes.circle} ${classes.circle1}`}></div>
        <div className={`${classes.circle} ${classes.circle2}`}></div>
        <div className={`${classes.circle} ${classes.circle3}`}></div>
        <div className={`${classes.circle} ${classes.circle4}`}></div>
        <div className={`${classes.circle} ${classes.circle5}`}></div>
        <Hero />
        <Separator />
        <Testing />
      </Body>
    </ThemeProvider>
  );
}

export default App;
