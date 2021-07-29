import { combineReducers } from "redux";
import messageReducer from "./messageReducer";

import authReduser from "./authReducer";
import roomReducer from "./roomReducer";
import roomListReducer from "./roomListReducer";
const rootReducer = combineReducers({

  users: authReduser,
  userReducer: roomReducer,
  messages: messageReducer,
  rooms:roomListReducer
});
export default rootReducer;
