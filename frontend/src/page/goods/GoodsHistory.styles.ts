import { makeStyles } from "@/component/style/tss-react";
import colors from "@/const/colors";

const useStyle = makeStyles()({
  historySection: {
    backgroundColor: "#eaeaea",
    overflow: "hidden",
    flex: "auto",
    "@media (max-width: 992px)": {
      width: "0px",
    },
  },

  historyList: {
    backgroundColor: "white!important",
    padding: "8px 10px !important",
    "&:last-of-type": {
      borderTopRightRadius: "10px",
      borderBottomRightRadius: "10px",
    },
    "&:first-of-type": {
      borderTopLeftRadius: "10px",
      borderBottomLeftRadius: "10px",
    },
  },

  backButton: {
    fontSize: "16px",
    "@media (min-width: 992px)": {
      display: "none",
    },
  },

  detailSectionTitle: {
    margin: 0,
    fontWeight: "bold",
    color: colors.brown,
    fontSize: "14px",
  },

  detailModalRow: {
    "& p": {
      fontSize: "14px",
    },
  },

  detailTable: {
    "&  td": {
      paddingTop: "5px",
      paddingBottom: "5px",
    },
  },

  modalContainer: {
    "& p": {
      fontSize: "15px",
    },
  },
});

export default useStyle;
