export interface IProduct {
    image: string
}

export interface IdefaultState {
    products: IProduct[],
    choosenProducts: IProduct[]
}

// const { products, choosenProducts} = JSON.parse(JSON.parse(localStorage.getItem('persist:root'))?.catalog);

const defaultState: IdefaultState = {
    products: [],
    choosenProducts: localStorage.getItem('persist:root')?JSON.parse(JSON.parse(localStorage.getItem('persist:root')).catalog).choosenProducts: []

};
const ADD_PRDODUCTS = "ADD_PRDODUCTS";
const CHOOSE_PRDODUCT = "CHOOSE_PRDODUCT";

export const catalogReducer = (state = defaultState, action: any) => {
    console.log(state)
  switch (action.type) {
    case ADD_PRDODUCTS:
      return { ...state, products: action.payload };
    case CHOOSE_PRDODUCT:
      return { ...state, choosenProducts: [...state.choosenProducts, action.payload] };
    default:
      return state;
  }
};

export const addProductsAction = (payload: any) => ({type: ADD_PRDODUCTS, payload})

export const chooseProductAction = (payload: any) => ({type: CHOOSE_PRDODUCT, payload})


