import { makeStyles } from "@/component/style/tss-react";

const useStyle = makeStyles()({
  goodsContainer: {
    width: "500px",
    overflow: "hidden",
    transition: "width .5s",
    flexShrink: 0,
    "@media (max-width: 992px)": {
      width: "100%",
    },
  },

  goodsNonActive: {
    "@media (max-width: 992px)": {
      width: "0px !important",
    },
  },

  goodsContainerActive: {
    width: "100%",
  },

  mainTable: {
    "@media (min-width: 992px)": {
      minWidth: "500px",
    },
  },

  popoverUl: {
    paddingLeft: 0,
    marginBottom: 0,
  },

  popoverList: {
    padding: "8px 20px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
  },
});

export default useStyle;
