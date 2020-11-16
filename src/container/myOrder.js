/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Header from "../component/header/index";
import SideNav from "../component/sideNav/index";
import MyOrder from "../component/myOrder/index";
export default () => {
  return (
    <div className="container-fluid container-backkground">
      <Header />
      <div className="row">
        <div className="col-4 pd-right-0">
          <SideNav />
        </div>
        <div className="col-8 pd-left-0 ">
          <MyOrder />
        </div>
      </div>
    </div>
  );
};
