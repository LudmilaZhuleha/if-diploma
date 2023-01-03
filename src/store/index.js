import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import {combineReducers} from "redux";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";
import thunk from 'redux-thunk';
import setUserReducer from "./setUserReducer";
import fetchedBooksReducer from "./fetchedBooksReducer";
import ordersReducer from "./ordersReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  setUserReducer,
  fetchedBooksReducer,
  ordersReducer,
  loginReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export const persistor = persistStore(store);