import { useAppSelector } from "@/hooks/useRedux";
import React from "react";
import useStyle from "./Loading.style";

const Loading: React.FC = () => {
  const { loading } = useAppSelector((state) => state.ui);
  const { classes } = useStyle();

  if (!loading) return null;
  return (
    <div className={classes.container}>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
