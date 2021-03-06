/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
import Table from "../table/index";
export default () => {
  return (
    <div className="order-container bg-color-gray">
      <div className="inner-order">
        <div className="d-flex jst-cont-between alg-itm-end">
          <div>
            <h5 className="fnt-w-700 txt-clr">My order list</h5>
            <p className="txt-clr">updated every several minutes</p>
          </div>
          <div>
            <button className="btn-gray txt-clr fnt-w-600">EXPORT</button>
          </div>
        </div>
        <div className="order-table-main mrg-top-30">
          <div className="order-header txt-clr d-flex ">
            <span>
              <h6 className="txt-clr">All Orders</h6>
            </span>
            <span>
              <h6 className="txt-clr mrg-left-40">New Orders</h6>
            </span>
            <span>
              <h6 className="txt-clr mrg-left-40">Pending Orders</h6>
            </span>
            <span>
              <h6 className="txt-clr mrg-left-40">Completed Orders</h6>
            </span>
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};
