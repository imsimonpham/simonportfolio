import React, { useState } from "react";
import { Box, makeStyles, withStyles } from "@material-ui/core";
import { CgMenuLeft } from "react-icons/cg";
import { IoShareSocial } from "react-icons/io5";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Colors } from "../data/Variables";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import styled from "styled-components";

const useStyles = makeStyles((theme) => {
  return {
    nav: {
      height: "60px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: `0 1rem`,
      "&a": {
        textDecoration: "none",
      },
      position: "relative",
    },
    navLeft: {
      display: "flex",
      alignItems: "center",
    },
    navRight: {
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    name: {
      fontSize: "1rem",
      textTransform: "uppercase",
      fontWeight: "900",
      marginLeft: "0.8rem",
      color: `${Colors.primary}`,
    },
    bar: {
      fontSize: "1.6rem",
      color: `${Colors.primary}`,
      cursor: "pointer",
    },
    icon: {
      fontSize: "1.5rem",
      fill: `${Colors.primary}`,
      marginLeft: "0.7rem",
      transition: `all 0.2s ease-in-out`,
      "&:hover": {
        transform: `scale(1.2)`,
      },
      [theme.breakpoints.down("xs")]: {
        margin: `0 0 0.3rem 0`,
      },
    },
    iconContainer: {
      borderRadius: "4rem",
      position: "absolute",
      width: "40px",
      right: "1%",
      top: "10%",
      display: "none",
      [theme.breakpoints.down("xs")]: {
        display: "flex",
        alignItems: "center",
      },
    },
    accor: {
      width: "100%",
      position: "relative",
      background: "transparent",
    },
    accorDetails: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    iconsWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    mediaIcon: {
      color: `${Colors.primary}`,
      position: "absolute",
      // left: "-20%",
    },
  };
});

const AccordionSum = styled(AccordionSummary)`
  .MuiAccordionSummary-expandIcon.Mui-expanded {
    transform: rotate(0deg);
  }
  .MuiIconButton-edgeEnd {
    margin: 0;
  }
  .MuiAccordionSummary-root {
    padding: 0;
  }
  .MuiAccordionSummary-content.Mui-expanded {
    margin: 0;
  }
`;

const Navbar = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  let style = {
    summary: {
      background: expanded
        ? `linear-gradient(to right bottom, rgba(255,255,255, 0.2), rgba(255,255,255,0.1))`
        : `transparent`,
      backdropFilter: expanded ? `blur(0.5rem)` : `blur(0)`,
    },
    icon: {
      transform: expanded ? `rotate(0deg)` : `rotate(0deg)`,
    },
  };

  return (
    <nav className={classes.nav}>
      <div className={classes.navLeft}>
        <CgMenuLeft
          className={classes.bar}
          onClick={() => {
            props.setOpenDrawer(true);
          }}
        />
        <span className={classes.name}>Simon Pham</span>
      </div>
      <Box className={classes.navRight}>
        <a href="https://github.com/imsimonpham" target="_blank">
          <AiFillGithub className={classes.icon} />
        </a>
        <a href="https://www.linkedin.com/in/imsimonpham/" target="_blank">
          <AiFillLinkedin className={classes.icon} />
        </a>
        <a href="https://www.instagram.com/imsimonpham/?hl=vi" target="_blank">
          <AiFillInstagram className={classes.icon} />
        </a>
        <a href="https://twitter.com/imsimonpham" target="_blank">
          <AiFillTwitterCircle className={classes.icon} />
        </a>
      </Box>
      <Box className={classes.iconContainer} style={style.summary}>
        <Accordion className={classes.accor} elevation={0}>
          <AccordionSum
            expandIcon={<IoShareSocial className={classes.mediaIcon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.accorSummary}
            aria-expanded={expanded}
            onClick={() => {
              setExpanded(!expanded);
            }}
          />
          <AccordionDetails className={classes.accorDetails}>
            <div className={classes.iconsWrapper}>
              <a href="https://github.com/imsimonpham" target="_blank">
                <AiFillGithub className={classes.icon} />
              </a>
              <a
                href="https://www.linkedin.com/in/imsimonpham/"
                target="_blank"
              >
                <AiFillLinkedin className={classes.icon} />
              </a>
              <a
                href="https://www.instagram.com/imsimonpham/?hl=vi"
                target="_blank"
              >
                <AiFillInstagram className={classes.icon} />
              </a>
              <a href="https://twitter.com/imsimonpham" target="_blank">
                <AiFillTwitterCircle className={classes.icon} />
              </a>
            </div>
          </AccordionDetails>
        </Accordion>
      </Box>
    </nav>
  );
};

export default Navbar;
