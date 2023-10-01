import "./index.css";
import BasketTable from "./components/BasketTable";
import { useAppSelector } from "../../share/store";
import { deleteChoosenProductAction } from "../../share/store/products/actions";
import { useDispatch } from "react-redux";
import BasketEmpty from "./components/BasketEmpty";
import { motion } from "framer-motion";

const Basket = () => {
  const dispatch = useDispatch();
  const { choosenProducts } = useAppSelector((state) => state.products);

  const sum = choosenProducts.reduce((currentSum, currentProduct) => {
    return currentSum + currentProduct.price;
  }, 0);

  function deleteChoosenPropuct(id: any) {
    dispatch(deleteChoosenProductAction({ id }));
  }

  return (
    <motion.section
      className="basket"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {choosenProducts.length ? (
        <BasketTable
          tableData={choosenProducts}
          deleteTableItem={deleteChoosenPropuct}
          totalSum={sum}
        ></BasketTable>
      ) : (
        <BasketEmpty></BasketEmpty>
      )}
    </motion.section>
  );
};

export default Basket;
