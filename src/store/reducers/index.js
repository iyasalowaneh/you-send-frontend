import { combineReducers } from "redux";

 import authReduser from "./authReducer";
const rootReducer = combineReducers({
  
  users: authReduser,
  userReducer: authReduser,
});
export default rootReducer;
