import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { appReducer } from "./appReducer";
import { tripReducer } from "./TripReducer";

export const reducer = combineReducers({
   user: userReducer,
   app: appReducer,
   trip: tripReducer,
});
