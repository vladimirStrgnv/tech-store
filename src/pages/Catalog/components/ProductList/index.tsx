import "./index.css";
import ProductCard from "../ProductCard";
import { motion } from "framer-motion";
import { listAnimationConfig } from "../../../../share/consts/animationsConfig";

const ProductList = ({ products, choosePropuct, choosenProducts }) => {
  return (
    <motion.ul
      className="product-list"
      initial="hidden"
      whileInView="visible"
    >
      {products.map((product, index) => (
        <motion.li
          className="product-list-item"
          key={product.id}
          variants={listAnimationConfig}
          custom={index}
        >
          <ProductCard
            image={product.image}
            name={product.name}
            price={product.price}
            choosePropuct={choosePropuct.bind(null, product)}
            id={product.id}
            isChoosen={choosenProducts.some(
              (choosenProduct) => choosenProduct.id === product.id
            )}
          ></ProductCard>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default ProductList;
