import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { appReducer } from "./appReducer";

export const reducer = combineReducers({
   user: userReducer,
   app: appReducer,
});
