import React from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { Colors } from "./data/Variables";
import GlobalStyle from "./globalStyles";
import Hero from "./components/Hero";
import styled from "styled-components";

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
  height: 100vh;
  width: 100vw;
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
  z-index: -999;
  padding: 2rem;
`;

function App({ props }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <Body>
        <Hero />
      </Body>
    </ThemeProvider>
  );
}

export default App;
