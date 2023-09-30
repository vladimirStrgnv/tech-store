import { useDispatch } from "react-redux";
import { useAppSelector } from "../../share/store";
import { useEffect } from "react";
import { getProducts } from "../../share/api";
import { addProductsAction, chooseProductAction } from "../../share/store/catalogReducer";
import ProductCard from "./components/ProductCard";
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
      <ul className="product-list">
        {products.map((product) => (
          <li className="product-list-item" key={product.id}>
            <ProductCard
              image={product.image}
              name={product.name}
              price={product.price}
              choosePropuct={choosePropuct.bind(null, product)}
              id={product.id}
              isChoosen={choosenProducts.some(choosenProduct => choosenProduct.id === product.id)}
            ></ProductCard>
          </li>
        ))}
      </ul>
    </section>
  );
};

export const Component = Catalog;
