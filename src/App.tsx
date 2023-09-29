import "./App.css";
import { RouterProvider } from "react-router";
import BrowserRouter from "./router";

function App() {
  return <RouterProvider router={BrowserRouter}></RouterProvider>;
}

export default App;
