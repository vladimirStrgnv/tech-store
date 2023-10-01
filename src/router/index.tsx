import { createBrowserRouter, createHashRouter } from "react-router-dom";
import Layout from "../share/components/Layout";
import MainPage from "../pages/MainPage/index";
import Catalog from "../pages/Catalog";
import Basket from "../pages/Basket";

const BrowserRouter = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        Component: MainPage
      },
      {
        path: "catalog",
        Component: Catalog

      },
      {
        path: "basket",
        Component: Basket
      },
    ],
  },
]);

export default BrowserRouter;
