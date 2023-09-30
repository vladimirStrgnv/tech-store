import { rootReducer } from "./store";
import {useSelector, TypedUseSelectorHook} from 'react-redux';


export type RootState = ReturnType<typeof rootReducer>;

export  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

