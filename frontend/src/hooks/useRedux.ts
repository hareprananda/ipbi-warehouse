import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/reducerprovider";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector as TypedUseSelectorHook<RootState>;
