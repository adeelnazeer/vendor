/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "../sales/style.scss";
import Table from "../table/index";
export default () => {
  return (
    <div className="sale-container bg-color-gray">
      <div className="inner-sale">
        <div className="d-flex jst-cont-between alg-itm-end pd-right-50 ">
          <div>
            <h4 className="fnt-w-600 txt-clr">All Transactions</h4>
            <p className="txt-clr">May 20,2020 - Jun 20,2020</p>
          </div>
          <div>
            <button className="btn-gray txt-clr fnt-w-600">EXPORT</button>
          </div>
        </div>
        <div>
          <hr className="hr-"></hr>
        </div>
        <div className="order-table-main pd-right-50">
          {/* <div className="order-header txt-clr d-flex ">
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
          </div> */}
          <Table />
        </div>
      </div>
    </div>
  );
};
