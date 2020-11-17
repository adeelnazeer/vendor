/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
import Table from "../table/index";
export default () => {
  return (
    <div className="order-container bg-color-gray">
      <div className="inner-order">
        <div className="d-flex jst-cont-between alg-itm-end">
          <div className="col-8">
            <h4 className="fnt-w-700 txt-clr">Contact Zurvos</h4>
            <p className="txt-clr mrg-top-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
        </div>
        <div className=" mrg-top-30 col-6">
          <div className=" row-one">
            <div>
              <label className="txt-clr fnt-w-600">Subject</label>
            </div>
            <div>
              <input />
            </div>
          </div>
          <div className=" row-two mrg-top-30">
            <div>
              <label className="txt-clr fnt-w-600">Your Message</label>
            </div>
            <div>
              <textarea rows="4"></textarea>
            </div>
          </div>
          <p className="txt-clr fnt-s-12">Character limits 2000.</p>
          <div className="contact-btn mrg-top-30">
            <button>CONTACT</button>
          </div>
        </div>
      </div>
    </div>
  );
};
