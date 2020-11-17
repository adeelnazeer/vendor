/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
import Table from "../table/index";
export default () => {
  return (
    <div className="sale-container bg-color-gray">
      <div className="inner-sale">
        <div className="d-flex column-one">
          <div className="col-5">
            <div className="one txt-clr">
              <h1 className="fnt-s-72">40</h1>
              <h5>This month</h5>
              <p>VIEW DETAILS</p>
            </div>
          </div>
          <div className="col-5">
            <div className="two txt-clr">
              <h1 className="fnt-s-72">120</h1>
              <h5>Total Sales on Zurvos</h5>
              <p>VIEW DETAILS</p>
            </div>
          </div>
          <div className="col-2">
            <div className="three txt-clr">
              <h1 className="fnt-s-72">30</h1>
              <h5>Total </h5>
              <p>VIEW </p>
            </div>
          </div>
        </div>
        <div className="d-flex jst-cont-between alg-itm-end pd-right-50 mrg-top-30">
          <div>
            <h6 className="fnt-w-600 txt-clr">New Sales</h6>
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
