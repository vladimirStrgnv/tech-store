export interface IProduct {
    image: string
    id: number,
    price: number,
    name: string
}

export interface IProductsState {
    products: IProduct[],
    choosenProducts: IProduct[],
    totalPrice: number
}