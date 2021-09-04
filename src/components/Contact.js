import React, { useState } from "react";
import { makeStyles, TextField, withStyles } from "@material-ui/core";
import { Colors } from "../data/Variables";
import emailjs from "emailjs-com";

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
      background: `linear-gradient(to right bottom, rgba(0,0,0, 0.3), rgba(0,0,0,0.2))`,
      backdropFilter: `blur(0.2rem)`,
      marginBottom: "5rem",
      maxWidth: "1500px",
    },
    contactWrapper: {
      width: "90%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: `0 0 5rem 0`,
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
    form: {
      width: "70%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      [theme.breakpoints.down("xs")]: {
        width: "95%",
      },
    },
    input: { width: "100%", marginBottom: "2rem", maxWidth: "700px" },
    textArea: {
      width: "100%",
      outline: "none",
      border: "none",
      background: `linear-gradient(to right bottom, rgba(0,0,0, 0.3), rgba(0,0,0,0.2))`,
      height: "150px",
      padding: `1rem 0 0 0.8rem`,
      color: `${Colors.white}`,
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: "0.9rem",
      borderRadius: "0.6rem",
      "&::placeholder": {
        color: `${Colors.white}`,
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: "0.9rem",
      },
      borderBottom: `1px solid ${Colors.white}`,
      maxWidth: "700px",
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
      marginTop: "2rem",
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

const CssTextField = withStyles({
  root: {
    //place holder color
    "& .MuiFormLabel-root": {
      color: `${Colors.white}`,
      fontSize: "0.9rem",
    },

    //underline border color before and after focused
    "& .MuiFilledInput-underline::before": {
      borderBottom: `1px solid ${Colors.white}`,
      borderRadius: "0.6rem",
    },

    "& .MuiFilledInput-underline::after": {
      borderBottom: `1px solid ${Colors.primary}`,
      borderBottom: "none",
    },

    //background
    "& .MuiFilledInput-root": {
      background: `linear-gradient(to right bottom, rgba(0,0,0, 0.3), rgba(0,0,0,0.2))`,
      borderRadius: "0.6rem",
    },

    //text input color
    "& .MuiInputBase-input": { color: `${Colors.white}`, fontSize: "0.9rem" },

    "& label.Mui-focused": {
      color: `${Colors.primary}`,
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();

  const [btnHovered, setBtnHovered] = useState(false);

  let style = {
    hover: {
      backgroundPosition: btnHovered ? `left` : `right`,
    },
    btn: {
      color: btnHovered ? `${Colors.white}` : `${Colors.primary}`,
    },
  };

  const [submitted, setSubmitted] = useState(0);
  const submissionAlert = () => {
    setSubmitted(1);
    setTimeout(() => {
      setSubmitted(0);
    }, 1500);
  };

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_s3tod1s",
        "template_37g46zq",
        e.target,
        "user_shfC8ZhcVvEc913iJqVzf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // submissionAlert();
    e.target.reset();
  }
  return (
    <section className={classes.container} id="contact">
      <h1 className={classes.title}>
        Contact Me<span>.</span>
      </h1>
      <section
        className={classes.contactWrapper}
        onSubmit={(e) => {
          sendEmail(e);
        }}
      >
        <form className={classes.form} autoComplete="off">
          <CssTextField
            id="custom-css-standard-input"
            label="Name"
            className={classes.input}
            variant="filled"
            name="name"
            required
          />
          <CssTextField
            id="custom-css-standard-input"
            label="Email"
            className={classes.input}
            variant="filled"
            name="email"
            required
          />
          <textarea
            className={classes.textArea}
            placeholder="Message"
            name="message"
            required
          />
          <button
            className={classes.btn}
            style={style.btn}
            onMouseEnter={() => {
              setBtnHovered(true);
            }}
            onMouseLeave={() => {
              setBtnHovered(false);
            }}
            type="submit"
          >
            Send Message
            <span
              style={style.hover}
              className={`${classes.btnOverlay} ${classes.btnBg1}`}
            ></span>
          </button>
        </form>
      </section>
    </section>
  );
};

export default Contact;
