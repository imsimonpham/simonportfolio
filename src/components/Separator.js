import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Colors } from "../data/Variables";

const useStyles = makeStyles((theme) => {
  return {
    separator: {
      height: "300px",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "3rem",
      fontWeight: "900",
    },
  };
});

const Separator = () => {
  const classes = useStyles();
  return <Box className={classes.separator}>About Me</Box>;
};

export default Separator;
