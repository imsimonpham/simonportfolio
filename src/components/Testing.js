import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Colors } from "../data/Variables";

const useStyles = makeStyles((theme) => {
  return {
    heroContainer: {
      height: "90vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      borderRadius: "0.5rem",
      background: `${Colors.white}`,
      background: `linear-gradient(to right bottom, rgba(0,0,0, 0.6), rgba(0,0,0,0.3))`,
      // border: `1px solid ${Colors.white}`,
      backdropFilter: `blur(4rem)`,
    },
  };
});

const Testing = () => {
  const classes = useStyles();
  return <Box className={classes.heroContainer}></Box>;
};

export default Testing;
