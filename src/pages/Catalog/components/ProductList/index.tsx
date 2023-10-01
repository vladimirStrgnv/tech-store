import "./index.css";
import ProductCard from "../ProductCard";
import { motion } from "framer-motion";
import { listAnimationConfig } from "../../../../share/consts/animationsConfig";
import { IProduct } from "../../../../share/store/products/types";
import React from "react";

interface IProductList {
    choosePropuct: (product)=> void,
    products: IProduct[],
    choosenProducts: IProduct[]
}

const ProductList: React.FC<IProductList> = ({ products, choosePropuct, choosenProducts }) => {
  return (
    <motion.ul
      className="product-list"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {products.map((product, index) => (
        <motion.li
        initial="hidden"

            animate="visible"
          className="product-list-item"
          key={product.id}
          variants={listAnimationConfig}
          custom={index + 1}
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
