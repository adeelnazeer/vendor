/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
export default () => {
  let url = typeof window !== "undefined" ? window.location.pathname : "";
  return (
    <div className="bg-color-gray container-side-nav ">
      <div className="col-10 txt-clr">
        <Link to="/store">
          <h5 className={url === "/store" ? "btn-background" : ""}>My Store</h5>
        </Link>
        <Link to="/myorder">
          <h5 className={url === "/myorder" ? "btn-background" : ""}>
            Order List
          </h5>
        </Link>
        <Link to="/sales">
          <h5 className={url === "/sales" ? "btn-background" : ""}>Sales</h5>
        </Link>
        <Link to="/finance">
          <h5 className={url === "/finance" ? "btn-background" : ""}>
            Finance Report
          </h5>
        </Link>
        <Link to="/transaction">
          <h5 className={url === "/transaction" ? "btn-background" : ""}>
            Transaction
          </h5>
        </Link>
        <Link to="/all-product">
          <h5 className={url === "/all-product" ? "btn-background" : ""}>
            All Products
          </h5>
        </Link>
        <Link to="/contact">
          <h5 className={url === "/contact" ? "btn-background" : ""}>
            Contact Zurvos
          </h5>
        </Link>
        <Link to="/feedback">
          <h5 className={url === "/feedback" ? "btn-background" : ""}>
            Give Feedback
          </h5>
        </Link>
        <Link to="/vendor-policy">
          <h5 className={url === "/vendor-policy" ? "btn-background" : ""}>
            Vendor Policy
          </h5>
        </Link>
      </div>
    </div>
  );
};
