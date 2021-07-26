import { combineReducers } from "redux";
import LoggedInUserReducer from "./LoggedInUserReducer";

export default combineReducers({
  loggedInUser: LoggedInUserReducer,
});
