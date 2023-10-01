import { ADD_PRDODUCTS, DELETE_CHOOSEN_PRDODUCT,  CHOOSE_PRDODUCT} from "./actionsType";
import { IProductsState } from "./types";

const defaultState: IProductsState = {
    products: [],
    choosenProducts: localStorage.getItem('persist:root')?JSON.parse(JSON.parse(localStorage.getItem('persist:root')).products).choosenProducts: [],
    totalPrice: 0
};

export const productsReducer = (state = defaultState, action: any): IProductsState => {
    switch (action.type) {
      case ADD_PRDODUCTS:
        return { ...state, products: action.payload };
      case DELETE_CHOOSEN_PRDODUCT:
        return { ...state, choosenProducts: [...state.choosenProducts.filter(product => product.id !== action.payload.id)]};
      case CHOOSE_PRDODUCT:
        return {
          ...state,
          choosenProducts: [...state.choosenProducts, action.payload],
        };
      default:
        return state;
    }
  };