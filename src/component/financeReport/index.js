/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "../sales/style.scss";
import Table from "../table/index";
export default () => {
  return (
    <div className="sale-container bg-color-gray">
      <div className="inner-sale">
        <div className="d-flex column-one">
          <div className="col-5">
            <div className="one txt-clr">
              <p>YOUR CURRENT BALANCE</p>
              <h1 className="fnt-s-72">$40.00</h1>
              <h5>Withdraw Funds</h5>
            </div>
          </div>
          <div className="col-5">
            <div className="two txt-clr">
              <p> BALANCE PENDING</p>
              <h1 className="fnt-s-72">$34.00</h1>
              <h5>Release Date:23 may</h5>
            </div>
          </div>
          <div className="col-2">
            <div className="three txt-clr">
              <p> BALANCE </p>
              <h1 className="fnt-s-72">$34</h1>
              <h5>Release</h5>
            </div>
          </div>
        </div>
        <div className="d-flex jst-cont-between alg-itm-end pd-right-50 mrg-top-30">
          <div>
            <h6 className="fnt-w-600 txt-clr">All Finance Reports</h6>
            <p className="txt-clr">updated every several minutes</p>
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
