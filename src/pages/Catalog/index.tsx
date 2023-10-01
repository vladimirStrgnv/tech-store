import { useDispatch } from "react-redux";
import { useAppSelector } from "../../share/store";
import { useEffect } from "react";
import { getProducts } from "../../share/api";
import { addProductsAction, chooseProductAction } from "../../share/store/catalogReducer";
import ProductList from "./components/ProductList";
import "./index.css";

const Catalog = () => {
  const dispatch = useDispatch();
  const {products, choosenProducts} = useAppSelector((state) => state.catalog);
  useEffect(() => {
    async function fetch() {
      const { items: products } = await getProducts();
      dispatch(addProductsAction(products));
    }
    fetch();
  }, []);

  function choosePropuct(product) {
    dispatch(chooseProductAction(product));
  }

  return (
    <section className="catalog">
      <ProductList products={products} choosenProducts={choosenProducts} choosePropuct={choosePropuct}></ProductList>
    </section>
  );
};

export const Component = Catalog;
