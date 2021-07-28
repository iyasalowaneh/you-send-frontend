import { combineReducers } from "redux";
import messageReducer from "./messageReducer";

import authReduser from "./authReducer";
import roomReducer from "./roomReducer";
const rootReducer = combineReducers({

  users: authReduser,
  userReducer: roomReducer,
  messages: messageReducer,
});
export default rootReducer;
