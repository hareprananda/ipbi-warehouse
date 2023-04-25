import { makeStyles } from "@/component/style/tss-react";

const useStyle = makeStyles()({
  popover: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: "14px",
    boxShadow: "0px 0px 13px 1px rgba(0,0,0,0.2)",
    WebkitBoxShadow: "0px 0px 13px 1px rgba(0,0,0,0.2)",
    MozBoxShadow: "0px 0px 13px 1px rgba(0,0,0,0.2)",
    right: 40,
    zIndex: 99,
    transform: "translate(0, -48px)",
    overflow: "hidden",
    "& ul": {
      padding: 0,
      marginBottom: 0,
      listStyleType: "none",
    },

    "& ul  li": {
      cursor: "pointer",
      padding: "5px 10px",
      "&:hover": {
        backgroundColor: `rgba(0, 0, 0, 0.1)`,
      },
    },
  },

  overlay: {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 60,
  },
});

export default useStyle;
