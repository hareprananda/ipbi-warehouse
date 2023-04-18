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
});

export default useCommonStyle;
