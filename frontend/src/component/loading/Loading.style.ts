import { makeStyles } from "../style/tss-react";

const useStyle = makeStyles()({
  container: {
    width: "100vw",
    height: "100vh",
    backgroundColor: `#00000080`,
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default useStyle;
