import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import RemoveProductBtn from "../RemoveProductBtn";
import React from "react";
import { IProduct } from "../../../../share/store/products/types";

interface IBasketTable {
    deleteTableItem: (id: any)=> void,
    tableData: IProduct[],
    totalSum: number
}

const BasketTable: React.FC<IBasketTable> = ({ tableData, deleteTableItem, totalSum }) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
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
                    deleteChoosenPropuct={deleteTableItem.bind(
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
              <TableCell>Итого: <b>{totalSum} р.</b></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BasketTable;
