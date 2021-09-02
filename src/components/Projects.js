import React, { useState, useRef } from "react";
import {
  Box,
  makeStyles,
  Modal,
  Backdrop,
  Fade,
  Tooltip,
  IconButton,
} from "@material-ui/core";
import { Colors } from "../data/Variables";
import { ProjectData } from "../data/ProjectData";
import { AiOutlineClose } from "react-icons/ai";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      height: "auto",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      borderRadius: "0.5rem",
      justifyContent: "flex-start",
      alignItems: "center",
      background: `linear-gradient(to right bottom, rgba(255,255,255, 0.2), rgba(255,255,255,0.1))`,
      backdropFilter: `blur(0.2rem)`,
      maxWidth: "1500px",
      marginBottom: "5rem",
    },
    aboutContentWrapper: {
      width: "90%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
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
      margin: `5rem 0rem`,
      fontSize: "3.5rem",
      color: `${Colors.black}`,
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

    singleProject: {
      width: "60%",
      height: "51%",
      maxWidth: "700px",
      padding: "1.5rem",
      background: `linear-gradient(to right bottom, rgba(255,255,255, 0.6), rgba(255,255,255,0.5))`,
      borderRadius: "0.5rem",
      position: "relative",
      transition: `all 0.5s ease-in-out`,
      marginBottom: "2.5rem",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        height: "85%",
        padding: "0.5rem",
      },
    },
    singleProjectOverlay: {
      position: "absolute",
      left: "0",
      top: "0",
      width: "100%",
      height: "100%",
      backgroundImage: `linear-gradient(to bottom right, ${Colors.primary} 50%,${Colors.glass} 50%)`,
      backgroundSize: `200% 200%`,
      backgroundPosition: `bottom right`,
      opacity: "0",
      transition: `all 0.5s ease-in-out`,
      borderRadius: "0.5rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&:hover": {
        opacity: "0.9",
        backgroundPosition: `top left`,
      },
      "& h1": {
        zIndex: "1",
        fontSize: "2.5rem",
        color: `${Colors.white}`,
        cursor: "pointer",
        transition: `all 1 ease-in-out`,
        textTransform: "uppercase",
        [theme.breakpoints.down("sm")]: {
          fontSize: "1.5rem",
        },
      },
    },
    imgWrapper: {
      width: "100%",
      height: "100%",
      cursor: "pointer",
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "full",
      },
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[6],
      height: "auto",
      width: "765px",
      position: "relative",
      outline: "none",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      overflowY: "auto",
      padding: `5rem 0`,
      [theme.breakpoints.down("sm")]: {
        width: "80%",
        height: "90%",
        padding: `5rem 0`,
      },
    },
    closeIcon: {
      fontSize: "1.5rem",
      position: "absolute",
      right: "2%",
      top: "1.5%",
      cursor: "pointer",
      zIndex: "1",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
        right: "1.5%",
        top: "3%",
        fontSize: "1.3rem",
      },
    },

    modalImgWrapper: {
      width: "80%",
      height: "80%",
      border: `10px solid ${Colors.primary}`,
      marginBottom: "2rem",
    },
    modalContent: {
      border: `1px solid red`,
      width: "80%",
      height: "800px",
    },
    modalContentWrapper: {
      width: "80%",
      height: "80%",
      "& h2": {
        margin: `0.2rem 0`,
      },
      "& h3": {
        margin: `0.2rem 0`,
      },
    },
    linksWrapper: {
      display: "flex",
      "& p": {
        margin: "0",
      },
      "& a": {
        textDecoration: "none",
        color: `${Colors.primary}`,
        fontWeight: "700",
      },
      "& a:first-child": {
        "& p:first-child": {
          borderRight: `1px solid black`,
          paddingRight: "0.5rem",
          marginRight: "0.5rem",
        },
      },
      marginBottom: "1rem",
    },
    projectIntro: {
      marginBottom: "0.5rem",
    },
    techUsedWrapper: {
      display: "flex",
      alignItems: "center",
      height: "50px",
    },
    techList: {
      display: "flex",

      height: "50px",
      alignItems: "center",
    },
    techIcon: {
      height: "30px",
      width: "30px",
      fill: `${Colors.react}`,
      //   marginRight: "0.5rem",
    },
  };
});

const Projects = (props) => {
  const classes = useStyles();

  //individual box control
  const [id, setId] = useState(0);

  //modal
  const [open, setOpen] = useState(null);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.container} id="projects">
      <h1 className={classes.title}>
        My Projects<span>.</span>
      </h1>
      <section className={classes.aboutContentWrapper}>
        {ProjectData.map((item, index) => {
          return (
            <Box key={index} className={classes.singleProject}>
              <div className={classes.singleProjectOverlay}>
                <h1
                  onClick={() => {
                    setId(index);
                    handleOpen();
                  }}
                >
                  {item.title}
                </h1>
              </div>
              <div className={classes.imgWrapper}>
                <img src={item.img} alt={item.alt} />
              </div>
            </Box>
          );
        })}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 300,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <AiOutlineClose
                className={classes.closeIcon}
                onClick={handleClose}
              />
              <div
                className={`${classes.imgWrapper} ${classes.modalImgWrapper}`}
              >
                <img src={ProjectData[id].img} alt={ProjectData[id].alt} />
              </div>

              <div className={classes.modalContentWrapper}>
                <h2>{ProjectData[id].title}</h2>
                <div className={classes.linksWrapper}>
                  <a href={ProjectData[id].linkDemo} target="_blank">
                    <p>Demo</p>
                  </a>
                  <a href={ProjectData[id].linkGithub} target="_blank">
                    <p>Source Code</p>
                  </a>
                </div>
                <div className={classes.projectIntro}></div>
                <div className={classes.techUsedWrapper}>
                  <h3>Technologies used: </h3>
                  <div className={classes.techList}>
                    {ProjectData[id].tech.map((icon, index) => {
                      return (
                        <Tooltip title={icon.name} aria-label="add" key={index}>
                          <IconButton aria-label={icon.name}>
                            <img
                              className={classes.techIcon}
                              src={icon.icon}
                              alt={icon.name}
                            />
                          </IconButton>
                        </Tooltip>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </Modal>
      </section>
    </Box>
  );
};

export default Projects;
