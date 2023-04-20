import colors from "@/const/colors";
import { makeStyles } from "./tss-react";

const useCommonStyle = makeStyles()({
  stickyTableContainer: {
    width: "100%",
    overflow: "auto",
  },

  stickyTableTd: {
    backgroundColor: colors.white + "!important",
    position: "sticky",
    left: 0,
  },

  stickyTableRight: {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: colors.white + "!important",
    position: "sticky",
    right: 0,
  },

  commonTd: {
    "& p": {
      fontSize: "14px",
      margin: 0,
    },
    "& p:nth-of-type(2)": {
      fontWeight: 500,
    },
  },
});

export default useCommonStyle;
