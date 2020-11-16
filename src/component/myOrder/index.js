/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
export default () => {
  return (
    <div className="order-container bg-color-gray">
      <div className="inner-order">
        <div className="d-flex jst-cont-between">
          <div>
            <h5 className="fnt-w-700">My order list</h5>
            <p>updated every several minutes</p>
          </div>
          <div>
            <button className="btn-gray">Export</button>
          </div>
        </div>
      </div>
    </div>
  );
};
