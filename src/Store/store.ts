import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userSlice from "./Reducer/useSlice";


const rootReducer = combineReducers({
    userSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type rootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

