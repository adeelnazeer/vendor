/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "../allProducts/style.scss";
import Table from "../table/index";
import Image from "../../assets/images/test.jpg";
import ProfileImage from "../../assets/images/Profile_pic4.png";
export default () => {
  return (
    <div className="my-product-container bg-color-gray">
      <div className="inner-sale">
        <div className="d-flex jst-cont-between alg-itm-cntr pd-right-50 ">
          <div className="d-flex alg-itm-center">
            <div>
              <img src={ProfileImage} alt="" />
            </div>
            <div className="mrg-left-20">
              <h6 className="txt-clr">Mike Cook</h6>
              <p>nancy.elis@mail.com</p>
            </div>
          </div>
          <div>
            <p>Grant Marshall</p>
            <p>marshall@yahoo.com</p>
            <p>255 Bills Place,+1(861) 550-2796</p>
          </div>
          <div>
            <button className="edit-btn">Edit</button>
          </div>
        </div>
        <div className="hr-line">
          <hr></hr>
        </div>
        <div className="d-flex jst-cont-between alg-itm-end pd-right-50 ">
          <div>
            <h4 className="fnt-w-700 txt-clr ">Your Banner deal</h4>
          </div>
          <div>
            <button className="txt-clr fnt-w-600 add-new">ADD NEW DEAL</button>
          </div>
        </div>
        <div className="d-flex jst-cont-between alg-itm-center deals mrg-top-30">
          <div>
            <h4 className="fnt-w-600 txt-clr">Subscribe Today for Free</h4>
            <h4 className="fnt-w-600 txt-clr">Shipping & Traning</h4>
          </div>
          <div>
            <h4 className="fnt-s-72 txt-clr fnt-w-700">$50.00</h4>
            <p className="fnt-w-600 txt-clr">GET FREE SHIPPING</p>
          </div>
        </div>
        <div className="txt-align-cntr mrg-top-20">
          <h4 className="fnt-w-700 txt-clr">My Products</h4>
        </div>
        <h6 className="fnt-w-600 mrg-top-40 txt-clr">CATEGORY</h6>
        <h5 className="txt-clr">Weight Loose</h5>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
