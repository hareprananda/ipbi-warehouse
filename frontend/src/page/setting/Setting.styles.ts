import { makeStyles } from "@/component/style/tss-react";

const useStyle = makeStyles()({
  table: {
    "& td p": {
      fontSize: "15px",
    },
  },

  editButton: {
    padding: "0px",
    height: "32px",
    width: "32px",
    display: "grid",
    placeItems: "center",
  },
});

export default useStyle;
