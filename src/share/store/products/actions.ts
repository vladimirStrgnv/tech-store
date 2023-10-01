import { IProduct } from "./types"
import { ADD_PRDODUCTS, DELETE_CHOOSEN_PRDODUCT,  CHOOSE_PRDODUCT} from "./actionsType";

export const addProductsAction = (payload: IProduct[]) => ({type: ADD_PRDODUCTS, payload})

export const chooseProductAction = (payload: IProduct) => ({type: CHOOSE_PRDODUCT, payload})

export const deleteChoosenProductAction = (payload: {id: number}) => ({type: DELETE_CHOOSEN_PRDODUCT, payload})