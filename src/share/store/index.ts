import {useSelector, TypedUseSelectorHook} from 'react-redux';
import { createStore, combineReducers } from "redux";
import { productsReducer } from "./products/reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
    products: productsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

type RootState = ReturnType<typeof rootReducer>;

export  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export  const store = createStore(persistedReducer)
export const persistor = persistStore(store)


