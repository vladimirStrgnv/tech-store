import { useDispatch } from "react-redux";
import { useAppSelector } from "../../share/store";
import { useEffect } from "react";
import { getProducts } from "../../share/api";
import { addProductsAction, chooseProductAction } from "../../share/store/products/actions";
import ProductList from "./components/ProductList";
import "./index.css";
import { motion } from "framer-motion";

const Catalog = () => {
  const dispatch = useDispatch();
  const {products, choosenProducts} = useAppSelector((state) => state.products);
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
    <motion.section className="catalog">
      <ProductList products={products} choosenProducts={choosenProducts} choosePropuct={choosePropuct}></ProductList>
    </motion.section>
  );
};

export default Catalog;
