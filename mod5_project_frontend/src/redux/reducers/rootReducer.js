import { combineReducers } from "redux";
import heroStatusReducer from "./heroStatusReducer"
import monsterStatusReducer from "./monsterStatusReducer"
import currentUserReducer from "./currentUserReducer"
import logInReducer from "./logInReducer"
import utilityReducer from "./utilityReducer"



export default combineReducers({
  status: heroStatusReducer,
  monsterStatus: monsterStatusReducer,
  currentUser: currentUserReducer,
  utilityReducer: utilityReducer,
  logIn: logInReducer
});
