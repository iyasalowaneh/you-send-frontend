import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
//import { fetchProducts } from "./actions/productActions";
import { fetchUser } from "./actions/authActions";
import rootReducer from "./reducers/index";
import { checkForToken } from "./actions/authActions";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, // reducer function
  composeEnhancers(applyMiddleware(thunk))
);
//store.dispatch(fetchProducts());
store.dispatch(fetchUser());
store.dispatch(checkForToken());

export default store;
