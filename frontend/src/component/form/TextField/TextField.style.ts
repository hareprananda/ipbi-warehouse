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
  },
});

export default useStyle;
