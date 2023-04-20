import colors from "@/const/colors";
import { makeStyles } from "../style/tss-react";

const useStyle = makeStyles()({
  popover: {
    zIndex: 5,
    margin: 0,
    opacity: 0,
    position: "absolute",
    left: 0,
    bottom: 0,
    transition: "opacity .5s",
    boxShadow: "0px 0px 13px 1px rgba(0,0,0,0.2)",
    WebkitBoxShadow: "0px 0px 13px 1px rgba(0,0,0,0.2)",
    MozBoxShadow: "0px 0px 13px 1px rgba(0,0,0,0.2)",
    transform: "translate(0, 100%)",
    minWidth: "400px",
  },

  popoverActive: {
    opacity: "1 !important",
  },

  overlay: {
    position: "fixed",
    zIndex: 4,
    width: "100vw",
    height: "100vh",
    top: "0",
    left: "0",
  },

  appliedFilterContainer: {
    backgroundColor: "rgba(0, 0,0,0.12)",
    display: "flex",
    flexWrap: "nowrap",
    overflow: "auto",
  },

  chips: {
    display: "flex",
    alignItems: "center",
    border: `1px solid ${colors.primary}`,
    borderRadius: "12px",
    gap: "5px",
    padding: "2px 8px",
    "& > *": {
      fontSize: "14px",
      color: colors.primary,
    },
  },

  filterButton: {
    "&:hover": {
      color: "white!important",
      opacity: ".5",
    },
  },
});
export default useStyle;
