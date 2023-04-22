import React from "react";
import useStyle from "./StatusFlag.style";

interface Props {
  status: string;
}

const statusColor: Record<string, string> = {
  ONGOING: "bg-primary text-white",
  APPROVE: "bg-success text-white",
  PENDING: "bg-secondary text-white",
  SUCCESS: "bg-success text-white",
  FINISH: "bg-success text-white",
};

const StatusFlag: React.FC<Props> = ({ status }) => {
  const { classes } = useStyle();

  return <p className={statusColor[status] + ` ${classes.statusSign}`}>{status}</p>;
};

export default StatusFlag;
