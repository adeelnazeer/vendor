/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Header from "../component/header/index";
import SideNav from "../component/sideNav/index";
import Profile from "../component/profile/index";
export default () => {
  return (
    <div className="container-fluid container-backkground">
      <Header />
      <div className="row">
        <div className="col-3 pd-right-0">
          <SideNav />
        </div>
        <div className="col-9 pd-left-0 ">
          <Profile />
        </div>
      </div>
    </div>
  );
};
