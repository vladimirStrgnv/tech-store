import React from "react";
import { Outlet } from "react-router";
import "./index.css";
import Header from "../Header";

const Layout = () => {
  return (
    <div className="wrapper">
      <div className="inner">
        <Header></Header>
        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default Layout;
