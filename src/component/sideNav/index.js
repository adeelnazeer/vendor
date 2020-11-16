/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
export default () => {
  let url = typeof window !== "undefined" ? window.location.pathname : "";
  return (
    <div className="bg-color-gray container-side-nav ">
      <div className="col-8 txt-clr">
        <h5 className={url === "/mystore" ? "btn-background" : ""}>My Store</h5>
        <h5 className={url === "/myorder" ? "btn-background" : ""}>
          Order List
        </h5>
        <h5>Sales</h5>
        <h5>Finance Report</h5>
        <h5>Transaction</h5>
        <h5>All Products</h5>
        <h5>Contact Zurvos</h5>
        <h5>Give Feedback</h5>
        <h5>Privacy Policy</h5>
      </div>
    </div>
  );
};
