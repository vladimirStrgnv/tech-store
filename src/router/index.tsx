import { createBrowserRouter, createHashRouter } from "react-router-dom";
import Layout from "../share/components/Layout";

const BrowserRouter = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        lazy: () => import("../pages/MainPage/index"),
      },
      {
        path: "catalog",
        lazy: () => import("../pages/Catalog/index"),
      },
      {
        path: "basket",
        lazy: () => import("../pages/Basket/index"),
      },
    ],
  },
]);

export default BrowserRouter;
