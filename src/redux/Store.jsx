import { applyMiddleware, combineReducers } from "redux";
import TodoReducer from "./reducers/Todos";
import UserReducer from "./reducers/User";
import ChessReducer from "./reducers/Chess";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const reducers = combineReducers({
  TodoReducer,
  UserReducer,
  ChessReducer,
});

const Store = configureStore({reducer: reducers}, applyMiddleware(thunk))


export default Store;
