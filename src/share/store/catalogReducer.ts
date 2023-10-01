export interface IProduct {
    image: string
    id: number,
    price: number,
    name: string
}

export interface IdefaultState {
    products: IProduct[],
    choosenProducts: IProduct[],
    totalPrice: number
}


const defaultState: IdefaultState = {
    products: [],
    choosenProducts: localStorage.getItem('persist:root')?JSON.parse(JSON.parse(localStorage.getItem('persist:root')).catalog).choosenProducts: [],
    totalPrice: 0
};

const ADD_PRDODUCTS = "ADD_PRDODUCTS";
const CHOOSE_PRDODUCT = "CHOOSE_PRDODUCT";
const DELETE_CHOOSEN_PRDODUCT = "DELETE_CHOOSEN_PRDODUCT";

export const catalogReducer = (state = defaultState, action: any): IdefaultState => {
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

export const addProductsAction = (payload: IProduct[]) => ({type: ADD_PRDODUCTS, payload})

export const chooseProductAction = (payload: IProduct) => ({type: CHOOSE_PRDODUCT, payload})

export const deleteChoosenProductAction = (payload: {id: number}) => ({type: DELETE_CHOOSEN_PRDODUCT, payload})


