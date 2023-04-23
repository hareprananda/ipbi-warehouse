import { makeStyles } from "@/component/style/tss-react";

const useStyle = makeStyles()({
  autocomplete: {
    position: "relative",
    display: "inline-block",
    width: "100%",
    "& .autocomplete-items": {
      position: "absolute",
      border: "1px solid #d4d4d4",
      borderBottom: "none",
      borderTop: "none",
      zIndex: "99",
      top: "100%",
      left: "0",
      right: "0",
      maxHeight: "250px",
      overflow: "auto",
    },

    "& .autocomplete-items div": {
      padding: "10px",
      cursor: "pointer",
      backgroundColor: "#fff",
      borderBottom: "1px solid #d4d4d4;",
    },

    /*when hovering an item:*/
    "& .autocomplete-items div:hover": {
      backgroundColor: "#e9e9e9",
    },

    /*when navigating through the items using the arrow keys:*/
    "& .autocomplete-active": {
      backgroundColor: "DodgerBlue !important",
      color: "#ffffff",
    },
    "& input": {
      width: "100% !important",
    },
  },
});

export default useStyle;
