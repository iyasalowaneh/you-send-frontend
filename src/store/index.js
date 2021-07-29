import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
//import { fetchProducts } from "./actions/productActions";
import { fetchUser } from "./actions/roomActions";
import { fetchMessage } from "./actions/messageAction";
import rootReducer from "./reducers/index";
import { checkForToken } from "./actions/authActions";
import { fetchRoom } from "./actions/roomListActions";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, // reducer function
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(fetchMessage());
store.dispatch(fetchRoom());
store.dispatch(fetchUser());

store.dispatch(checkForToken());

export default store;
