import { makeStyles } from "@/component/style/tss-react";
import colors from "@/const/colors";

const useStyle = makeStyles()({
  container: {
    width: "100%",
    maxWidth: "740px",
    padding: "30px 10px 10px",
    margin: "0 auto",
    "& input.form-control:focus": {
      borderColor: "none",
    },

    "& input-group input-group-text": {
      backgroundColor: "transparent",
    },

    "& input-group input.form-control": {
      borderLeft: "none",
    },
  },

  topCard: {
    position: "relative",
    overflow: "hidden",
    "&::after": {
      content: "''",
      width: "100%",
      position: "absolute",
      height: "10px",
      backgroundColor: colors.primary,
      top: "0",
      left: "0",
    },
  },

  cardTitle: {
    fontSize: "19px",
    fontWeight: 600,
    marginBottom: "10px",
    fontFamily: "Arial, Helvetica, sans-serif",
    color: colors.brown,
  },

  card: {
    marginBottom: "7px",
  },
});

export default useStyle;
