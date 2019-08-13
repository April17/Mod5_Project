import { combineReducers } from "redux";
import heroStatusReducer from "./heroStatusReducer"
import monsterStatusReducer from "./monsterStatusReducer"
import currentUserReducer from "./currentUserReducer"
import logInReducer from "./logInReducer"


export default combineReducers({
  status: heroStatusReducer,
  monsterStatus: monsterStatusReducer,
  currentUser: currentUserReducer,
  logIn: logInReducer
});
