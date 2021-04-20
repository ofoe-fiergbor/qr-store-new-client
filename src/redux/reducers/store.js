import { createStore, combineReducers } from "redux";
import Auth from "./Auth";

const reducer = combineReducers({
  auth: Auth,
});

const store = createStore(reducer);

export { store };
