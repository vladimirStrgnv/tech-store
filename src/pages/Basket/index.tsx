import "./index.css";
import BasketTable from "./components/BasketTable";
import { useAppSelector } from "../../share/store";
import { deleteChoosenProductAction } from "../../share/store/catalogReducer";
import { useDispatch } from "react-redux";
import BasketEmpty from "./components/BasketEmpty";
import { motion } from "framer-motion";

function createData(name: string, price: number, id?: number) {
  return { name, price, id };
}

const Basket = () => {
  const dispatch = useDispatch();
  const { choosenProducts } = useAppSelector((state) => state.catalog);

  const sum = choosenProducts.reduce((currentSum, currentProduct) => {
    const price = currentProduct.price;
    return currentSum + price;
  }, 0);

  const tableData = choosenProducts.map((product) =>
    createData(product.name, product.price, product.id)
  );

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
          tableData={tableData}
          deleteTableItem={deleteChoosenPropuct}
          totalSum={sum}
        ></BasketTable>
      ) : (
        <BasketEmpty></BasketEmpty>
      )}
    </motion.section>
  );
};

export const Component = Basket;
