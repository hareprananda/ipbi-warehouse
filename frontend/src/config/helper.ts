import dayjs from "dayjs";

export const idDayJs = (props?: dayjs.ConfigType) => {
  return dayjs(props).locale("id");
};
