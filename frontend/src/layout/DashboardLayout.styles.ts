import { makeStyles } from "@/component/style/tss-react";
import colors from "@/const/colors";

const useStyle = makeStyles()({
  dropdown: {
    "@media (max-width: 767px)": {
      transform: "translate(6px, -105px)",
      position: "relative",
      width: "36px",
      zIndex: 10000,
      "& > img": {
        opacity: 0,
      },
    },
    "@media (min-width: 767px)": {
      display: "grid",
      placeItems: "center",
    },
  },

  navDropdown: {
    "@media (max-width: 767px)": {
      height: 0,
    },
  },

  settingDropdown: {
    "@media (max-width: 767px)": {
      top: "-35px!important",
    },
  },

  profilePic: {
    backgroundColor: colors["gray-100"],
    height: 30,
    width: 30,
    display: "grid",
    placeItems: "center",
    "@media (max-width: 767px)": {
      opacity: 0,
    },
  },
});

export default useStyle;
