import "./index.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useAppSelector } from "../../share/store";
import RemoveProductBtn from "./components/RemoveProductBtn";
import { deleteChoosenProductAction } from "../../share/store/catalogReducer";
import { useDispatch } from "react-redux";

function createData(name: string, price: number, id?: number) {
  return { name, price, id };
}

const Basket = () => {
  const dispatch = useDispatch();
  const { choosenProducts } = useAppSelector((state) => state.catalog);

  const sum: number = choosenProducts.reduce((currentSum, currentProduct) => {
    const price = currentProduct.price;
    return currentSum + price
  }, 0 )


  const tableData = choosenProducts.map((product) =>
    createData(product.name, product.price, product.id)
  );

  function deleteChoosenPropuct(id: any) {
    dispatch(deleteChoosenProductAction({id}));
  }

  return (
    <section className="basket">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Наименование товара</TableCell>
              <TableCell align="center">Цена</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.price} р.</TableCell>
                <TableCell align="right">
                  <RemoveProductBtn
                    deleteChoosenPropuct={deleteChoosenPropuct.bind(
                      null,
                      row.id
                    )}
                  ></RemoveProductBtn>
                </TableCell>
              </TableRow>
            ))}
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>Итого: {sum}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export const Component = Basket;
