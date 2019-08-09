import { combineReducers } from "redux";
import heroStatusReducer from "./heroStatusReducer"
import currentUserReducer from "./currentUserReducer"
import logInReducer from "./logInReducer"


export default combineReducers({
  status: heroStatusReducer,
  currentUser: currentUserReducer,
  logIn: logInReducer
});
