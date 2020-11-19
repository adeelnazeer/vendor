/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Header from "../component/header/index";
import SideNav from "../component/sideNav/index";
import AllProduct from "../component/allProducts/index";
export default () => {
  return (
    <div className="container-fluid container-backkground">
      <Header />
      <div className="row">
        <div className="col-3 pd-right-0 side-nav-bar">
          <SideNav />
        </div>
        <div className="col-9 pd-left-0 right-container">
          <AllProduct />
        </div>
      </div>
    </div>
  );
};
