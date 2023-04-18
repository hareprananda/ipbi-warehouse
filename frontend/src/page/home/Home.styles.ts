import { makeStyles } from "@/component/style/tss-react";

const useStyle = makeStyles()({
  recentCardAccent: {
    position: "absolute",
    height: "100%",
    width: "5px",
    right: 0,
    top: 0,
  },

  goodsTable: {
    marginBottom: "0",
    "& tbody td": {
      fontSize: "14px",
      padding: "7px",
      fontWeight: 500,
      verticalAlign: "middle",
    },
    "& thead th": {
      fontSize: "14px",
      paddingTop: "14px",
      paddingBottom: "14px",
    },
  },

  goodsCardBody: { height: "327px", overflow: "auto", padding: 0 },

  pendingTable: {
    "& tbody td": {
      verticalAlign: "top",
    },
    "& tbody td:not(:nth-of-type(2)):not(:last-of-type)": {
      minWidth: "169px",
    },
    "& tbody td:nth-of-type(2)": {
      minWidth: "100px",
    },
    "& tbody td p": {
      fontSize: "14px",
      margin: 0,
    },
    "& tbody td p:nth-of-type(2)": {
      fontWeight: 500,
    },
  },
});

export default useStyle;
