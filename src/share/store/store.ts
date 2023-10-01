import { createStore, combineReducers, applyMiddleware } from "redux";
import { catalogReducer } from "./catalogReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

export const rootReducer = combineReducers({
  catalog: catalogReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);


export  let store = createStore(persistedReducer)
export let persistor = persistStore(store)
