/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
import Table from "../table/index";
import Image from "../../assets/images/test.jpg";
export default () => {
  return (
    <div className="my-product-container bg-color-gray">
      <div className="inner-sale">
        <div className="d-flex jst-cont-between alg-itm-end pd-right-50 top-div">
          <div>
            <h4 className="fnt-w-700 txt-clr">My Products</h4>
            <p>Total Products - 7</p>
          </div>
          <div>
            <button className="txt-clr fnt-w-600 add-new">
              ADD NEW PRODUCT
            </button>
          </div>
        </div>
        <div>
          <hr className="mrg-right-50"></hr>
        </div>
        <div>
          <h6 className="fnt-w-600 mrg-top-40 txt-clr">CATEGORY</h6>
          <h5 className="txt-clr">Weight Loose</h5>
          <div className="col-5 d-flex alg-itm-center upper-cat">
           
              <img className="cat-img" src={Image} alt="" />
            <div className="image-txt mrg-left-20">
              <h6 className="txt-clr">4-Tube Foot Pedal Residence</h6>
              <p className="fnt-w-600 fnt-s-14">Price:$14.95</p>
              <p className=" fnt-s-14">
                Total number sell:<span className="fnt-s-14 fnt-w-600">14</span>
              </p>
              <button className="edit-btn">Edit</button>
            </div>
          </div>
        </div>
        <h6 className="fnt-w-600 mrg-top-40 txt-clr">CATEGORY</h6>
        <h5 className="txt-clr">YOGA</h5>
        <div className="mrg-top-20 d-flex category alg-itm-center">
          <div className="col-5 d-flex alg-itm-center">
            <div>
              <img className="cat-img" src={Image} alt="" />
            </div>
            <div className="image-txt">
              <h6 className="txt-clr">4-Tube Foot Pedal Residence</h6>
              <p className="fnt-w-600 fnt-s-14">Price:$14.95</p>
              <p className=" fnt-s-14">
                Total number sell:<span className="fnt-s-14 fnt-w-600">14</span>
              </p>
              <button className="edit-btn">Edit</button>
            </div>
          </div>
          <div className="col-5 d-flex alg-itm-center">
            <div>
              <img className="cat-img" src={Image} alt="" />
            </div>
            <div className="image-txt">
              <h6 className="txt-clr">4-Tube Foot Pedal Residence</h6>
              <p className="fnt-w-600 fnt-s-14">Price:$14.95</p>
              <p className=" fnt-s-14">
                Total number sell:<span className="fnt-s-14 fnt-w-600">14</span>
              </p>
              <button className="edit-btn">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
