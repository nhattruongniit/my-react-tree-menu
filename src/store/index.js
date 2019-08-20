import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory as history } from "history";

// reducers
import rootReducers from "../reducers";

const reducers = combineReducers({
  ...rootReducers
});

// config redux dev tool
const composeEnhancers =
  (process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export { store, history };
