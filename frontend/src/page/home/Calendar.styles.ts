import { makeStyles } from "@/component/style/tss-react";
import colors from "@/const/colors";

const useStyle = makeStyles()({
  tile: {
    backgroundColor: "transparent",
    border: "none",
    padding: "10px 0",
  },

  calendar: {
    "& .react-calendar__month-view__weekdays__weekday": {
      textAlign: "center",
      "& > abbr": {
        textDecoration: "none",
      },
    },
    "& .react-calendar__month-view__days": {
      rowGap: "2px",
    },

    "& .react-calendar__navigation": {
      display: "flex",
      marginBottom: "15px",
      "& > button": {
        backgroundColor: "transparent",
        border: "none",
      },
    },
  },

  activeTile: {
    position: "relative",
    border: "none",
    backgroundColor: "transparent",
    color: "white",
    "& > abbr": {
      position: "relative",
      zIndex: 2,
    },
    "&::before": {
      content: "''",
      borderRadius: "50%",
      zIndex: 1,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      position: "absolute",
      width: "35px",
      height: "35px",
      backgroundColor: colors.primary,
      border: "none",
    },
  },

  tileEvent: {
    position: "relative",
    border: "none",
    backgroundColor: "transparent",
    color: "white",
    "& > abbr": {
      position: "relative",
      zIndex: 2,
    },
    "&::before": {
      content: "''",
      borderRadius: "50%",
      zIndex: 1,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      position: "absolute",
      width: "35px",
      height: "35px",
      backgroundColor: colors.success,
      border: "none",
    },
  },

  otherMonth: {
    "& > abbr": {
      opacity: "0.4",
    },
  },

  cardContainer: {
    display: "flex",
    overflow: "hidden",
    flexDirection: "row",
    marginBottom: 0,
    "@media (max-width: 576px)": {
      flexDirection: "column",
    },
  },

  calendarContainer: {
    maxWidth: "360px",
    padding: "16px",
    flexShrink: 0,
    position: "relative",
    "@media (max-width: 576px)": {
      maxWidth: "100%",
    },
  },

  descSection: {
    padding: "16px",
    background: "#eaeaea",
    flex: "auto",
    height: "375px",
    overflow: "auto",
    // '@media (max-width: 769px)': {
    //   gap: '7px',
    //   gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'
    // },
  },

  descTitle: {
    fontSize: "16px",
    margin: "5px 0 10px",
    fontFamily: "Arial",
    fontWeight: 600,
  },

  dailyList: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px 7px",
    backgroundColor: colors.white,
    borderRadius: "5px",
    marginBottom: "6px",
    "& p": {
      margin: 0,
      fontSize: "14px",
    },
    "& div > p": {
      color: colors["black-rgb"],
    },
    "& div > p:nth-of-type(2)": {
      fontSize: "13px",
      fontWeight: "bold",
    },

    "@media (min-width: 576px) and (max-width: 768px)": {
      alignItems: "flex-start",
      flexDirection: "column",
    },

    "@media (max-width: 370px)": {
      alignItems: "flex-start",
      flexDirection: "column",
    },
  },

  calendarLoader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "@media (max-width: 576px)": {
      flexDirection: "column",
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
});

export default useStyle;
