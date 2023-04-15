import loginBG from "@/assets/images/loginBG.jpg";
import { makeStyles } from "@/component/style/tss-react";

const useStyle = makeStyles()({
  container: {
    backgroundImage: `url(${loginBG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  backgroundOverflow: {
    backgroundColor: "#000000d4",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
  },
});

export default useStyle;
