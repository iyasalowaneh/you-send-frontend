import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//Reducers
import rootReducer from "./reducers/index";

//import { fetchProducts } from "./actions/productActions"; //Remove unused import

//Actions
import { fetchUser } from "./actions/authActions";
import { checkForToken } from "./actions/authActions";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, // reducer function
  composeEnhancers(applyMiddleware(thunk))
);
//store.dispatch(fetchProducts()); //Remove unused code
store.dispatch(fetchUser());
store.dispatch(checkForToken());

export default store;
