import { TypeReducer } from "./reducer";
import RegisterReducer from "./registerreducer";

type ReducerKey = (keyof typeof RegisterReducer)[];

const action = (Object.keys(RegisterReducer) as ReducerKey).reduce((acc, key) => {
  acc[key] = RegisterReducer[key].actions;
  return acc;
}, {} as TypeReducer<"actions">);

export default action;
