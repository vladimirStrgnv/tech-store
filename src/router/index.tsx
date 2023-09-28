import { createBrowserRouter, createHashRouter } from "react-router-dom";
import Layout from "../share/components/Layout";

const BrowserRouter = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    // children: [
    //     {
    //         index: true,
    //         path: "/",
    //         lazy: () => import("../pages/MainPage/index"),
    //       },
    // ],
  },
]);

export default BrowserRouter;
