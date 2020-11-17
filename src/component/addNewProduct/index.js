/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
import Table from "../table/index";
import Image from "../../assets/images/test.jpg";
export default () => {
  return (
    <div className="add-new-product-container  bg-color-gray">
      <div className="inner-sale">
        <div className="col-10">
          <h4 className="fnt-w-700 txt-clr">Add New Product to Your Store</h4>
          <div className="d-flex mrg-top-40 first-row">
            <div className="row-one">
              <div>
                <label className="txt-clr fnt-w-600">Product Name</label>
              </div>
              <div>
                <input placeholder="Super Grip Arm sStrengthener" />
              </div>
            </div>
            <div className="row-two mrg-left-20">
              <div>
                <label className="txt-clr fnt-w-600">Add Category</label>
              </div>
              <div>
                <select className="txt-clr">
                  <option>Perfect arm excercise</option>
                  <option>Perfect arm excercise</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mrg-top-30 d-flex descreption">
            <div className="row-one-des">
              <div>
                <label className="txt-clr fnt-w-600">Product Description</label>
              </div>
              <div>
                <textarea rows="3"></textarea>
              </div>
            </div>
          </div>
          <div className="d-flex mrg-top-40 first-row">
            <div className="row-one">
              <div>
                <label className="txt-clr fnt-w-600">Product Name</label>
              </div>
              <div>
                <input placeholder="Super Grip Arm sStrengthener" />
              </div>
            </div>
            <div className="row-two mrg-left-20">
              <div>
                <label className="txt-clr fnt-w-600">Add Category</label>
              </div>
              <div>
                <button>From Your Computer</button>
              </div>
            </div>
          </div>
          <div className="mrg-top-40 btn-add-new">
              <button className="" >ADD NEW PRODUCT</button>
          </div>
        </div>
      </div>
    </div>
  );
};
