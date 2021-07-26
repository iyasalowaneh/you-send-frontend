import { combineReducers } from "redux";

 import authReduser from "./authReducer";
const rootReducer = combineReducers({
  
  users: authReduser,
});
export default rootReducer;
