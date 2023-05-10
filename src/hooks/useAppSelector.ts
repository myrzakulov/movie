import {TypedUseSelectorHook, useSelector} from "react-redux";
import {rootState} from "../Store/store";

export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector