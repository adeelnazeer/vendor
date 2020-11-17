/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
import Table from "../table/index";
export default () => {
  return (
    <div className="Feedback-container bg-color-gray">
      <div className="inner-order">
        <div className="d-flex jst-cont-between alg-itm-end">
          <div className="col-8">
            <h4 className="fnt-w-700 txt-clr">
              Please provide additional feedback
            </h4>
            <p className="txt-clr mrg-top-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
        </div>
        <div className="col-4">
          <label className="fnt-w-700 txt-clr">
            Overall,how did you feel about the service?
          </label>
          <div className="radio-btn mrg-top-20 txt-clr">
            <label class="container">
              Very Satisfied
              <input type="radio" checked="checked" name="radio" />
              <span class="checkmark"></span>
            </label>
            <label class="container">
              Neither Satisfied, Nor Dissatisfied
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
            <label class="container">
              Dissatisfied
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
            <label class="container">
              Very Dissatisfied
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div className=" mrg-top-30 col-6">
          <div className=" row-one">
            <div>
              <label className="txt-clr fnt-w-600">
                How can we improve our service?
              </label>
            </div>
            <div>
              <input />
            </div>
          </div>
          <p className="txt-clr fnt-s-12">Character limits 2000.</p>
          <div className="contact-btn mrg-top-30">
            <button>SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
};
