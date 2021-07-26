import { combineReducers } from "redux";

import authReduser from "./authReduser";
const rootReducer = combineReducers({
  
  users: authReduser,
});
export default rootReducer;
