import React from "react";
import { Drawer, List, Box, makeStyles } from "@material-ui/core";
import { Colors } from "../data/Variables";
import { MenuData } from "../data/MenuData";
import { AiOutlineClose } from "react-icons/ai";

const useStyles = makeStyles((theme) => {
  return {
    drawer: {
      width: "100%",
      position: "relative",
      background: "transparent",
    },
    drawerPaPer: {
      width: "100%",
      background: `linear-gradient(to right bottom, rgba(255,255,255, 0.2), rgba(255,255,255,0.1))`,
      backdropFilter: `blur(5rem)`,
      overflow: "hidden",
    },
    navLinkList: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      height: "100%",
      width: "100%",
    },
    navLinksContainer: {
      display: "flex",
      flexDirection: "column",
    },
    navLinks: {
      textDecoration: "none",
      marginBottom: "5rem",
      fontSize: "2rem",
      color: `${Colors.primary}`,
      "&:hover": {
        color: `${Colors.lightGreen}`,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.2rem",
      },
    },
    closeIcon: {
      fontSize: "2rem",
      position: "absolute",
      left: "2%",
      top: "1.5%",
      cursor: "pointer",
      zIndex: "1",
      color: `${Colors.primary}`,
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
        left: "3%",
        top: "3%",
      },
    },
  };
});

const DrawerMenu = (props) => {
  const classes = useStyles();
  return (
    <Drawer
      anchor="left"
      open={props.openDrawer}
      onClose={() => props.setOpenDrawer(false)}
      className={classes.drawer}
      classes={{ paper: classes.drawerPaPer }}
      BackdropProps={{ invisible: true }}
    >
      <AiOutlineClose
        className={classes.closeIcon}
        onClick={() => {
          props.setOpenDrawer(false);
        }}
      />
      <List className={classes.navLinkList}>
        <Box className={classes.navLinksContainer}>
          {MenuData.map((item, index) => {
            return (
              <a
                href={item.link}
                className={classes.navLinks}
                key={index}
                onClick={() => {
                  props.setOpenDrawer(false);
                }}
              >
                {item.title}
              </a>
            );
          })}
        </Box>
      </List>
    </Drawer>
  );
};

export default DrawerMenu;
