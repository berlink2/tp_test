import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import dataReducer from "./dataReducer";
import thunk from "redux-thunk";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  data: dataReducer,
});

const store = createStore(
  reducers,
  initialState,
  compose(applyMiddleware)(...middleware)
);

export default store;
