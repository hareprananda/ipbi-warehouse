import { makeStyles } from "@/component/style/tss-react";

const useStyle = makeStyles()({
  inputContainer: {
    "& input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },

    "& input[type=number]": {
      MozAppearance: "textfield",
    },
    "& input[type=date]": {
      position: "relative",
      width: "100%",
    },
    "& input[type=date]::-webkit-calendar-picker-indicator": {
      background: "transparent",
      bottom: 0,
      color: "transparent",
      cursor: "pointer",
      height: "auto",
      left: 0,
      position: "absolute",
      right: 0,
      top: 0,
      width: "auto",
    },
  },
  textArea: {
    resize: "none",
    overflow: "hidden",
    height: "auto!important",
    minHeight: "25px!important",
    maxHeight: "60px!important",
  },
});

export default useStyle;
