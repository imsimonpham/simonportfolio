import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    rocket: {
      transform: `rotate(-45deg)`,
      position: "fixed",
      right: "2%",
      bottom: "1%",
      cursor: "pointer",
      animation: "transform ease infinite",
      "&:hover": {
        transform: `rotate(-45deg) scale(1.2)`,
      },
    },
  };
});

function RocketIcon(props) {
  const classes = useStyles();

  const [isScrolledDown, setIsScrolledDown] = useState(false);

  //show rocket when page is scrolled down 1000px from top
  const showRocket = () => {
    if (window.scrollY >= 1000) {
      setIsScrolledDown(true);
    } else {
      setIsScrolledDown(false);
    }
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", showRocket);
    };
    watchScroll();
  }, []);

  let style = {
    width: "45px",
    height: "45px",
    transition: "all 0.2s ease-in-out",
    opacity: isScrolledDown ? "1" : "0",
  };
  return (
    <svg
      width={100}
      height={100}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      {...props}
      className={classes.rocket}
    >
      <style>
        {
          "@keyframes line-rocket1-flame{0%{transform:scale(1)}50%{transform:scale(1.5)}}"
        }
      </style>
      <path
        className="stroke1 fill1"
        d="M23.042 33.612l11.852 11.062L57.98 21.589s-9.767-3.552-19.978-.888c-5.625 1.467-12.191 7.375-15.017 10.123-.793.772-.752 2.033.057 2.788zM68.838 79.139L57.572 67.482 80.25 43.997s3.722 9.703 1.237 19.96c-1.369 5.649-7.161 12.317-9.86 15.19-.758.807-2.02.788-2.789-.008z"
        fill="rgba(134,168,231,1)"
        stroke="rgba(0,0,0)"
        strokeWidth="3px"
      />
      <path
        className="fill1"
        d="M48.464 73.564L29.192 54.293c-1.36-1.36-1.557-3.489-.422-5.041 2.777-3.798 8.285-10.982 14.671-17.45 9.211-9.326 20.146-16.593 20.146-16.593s27.245-8.715 29.021-7.827c1.776.888-6.215 30.189-6.215 30.189s-4.44 10.654-15.542 21.641C63.356 66.63 56.8 71.595 53.33 74.04c-1.519 1.069-3.553.839-4.866-.475z"
        fill="rgba(134,168,231,1)"
        strokeWidth="3px"
      />
      <path
        className="stroke1"
        d="M63.587 15.209S52.652 22.476 43.44 31.803C37.055 38.27 31.547 45.454 28.77 49.252c-1.135 1.552-.938 3.68.422 5.04l19.272 19.272c1.313 1.314 3.347 1.544 4.866.475 3.47-2.444 10.026-7.41 17.521-14.827 11.102-10.987 15.542-21.641 15.542-21.641M63.587 15.209s27.245-8.715 29.021-7.827c1.776.888-6.215 30.189-6.215 30.189M63.587 15.209L86.393 37.57"
        stroke="rgba(0,0,0)"
        strokeWidth="3px"
      />
      <circle
        className="stroke1 fill1"
        cx={58.8676}
        cy={42.8981}
        r={8.87904}
        fill="rgba(134,168,231,1)"
        stroke="rgba(0,0,0)"
        strokeWidth="3px"
      />
      <path
        className="stroke2 fill2"
        d="M33.596 81.36c2.186-2.946 3.529-10.261-.49-13.844-4.594-4.095-13.24 0-15.201 3.955-2.805 5.657-3.433 15.822-3.433 15.822s14.451.362 19.124-5.933z"
        fill="rgba(209,107,165,1)"
        stroke="rgba(95,251,241,0.5)"
        strokeWidth="3px"
        style={{
          animation: "line-rocket1-flame 200ms infinite linear",
          transformOrigin: "34px 70px",
        }}
      />
    </svg>
  );
}

export default RocketIcon;
