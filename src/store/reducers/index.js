import { combineReducers } from "redux";

import authReduser from "./authReducer"; //Change to authReducer instead of authReduser

const rootReducer = combineReducers({
  users: authReduser,
  userReducer: authReduser,
});

export default rootReducer;
