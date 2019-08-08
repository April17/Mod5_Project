import { combineReducers } from "redux";
import heroStatusReducer from "./heroStatusReducer"


export default combineReducers({
  status: heroStatusReducer
});
