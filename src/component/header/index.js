/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import Logo from "../../assets/images/black.png";
import Search from "../../assets/images/icons/Search.png";
import Notification from "../../assets/images/icons/Notifications.png";
import ProfilePic from "../../assets/images/Profile_pic_1.png";
import Dot from "../../assets/images/icons/Dot_menu.png";
import { Link } from "react-router-dom";
import "./style.scss";
import Plus from "../../assets/images/plus.png";
export default () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <div className="container-fluid bg-color-gray">
      <nav class="navbar navbar-light bg-light txt-clr">
        <span class="navbar-brand">
          <img className="logo" src={Logo} alt="" />
        </span>

        <form class="form-inline">
          {/* <img className="icon-height mrg-right-30" src={Search} alt="" /> */}
          <Link to="/new-product">
            <img
              className="plus-icon mrg-right-10 cursor-pointer"
              src={Plus}
              alt=""
            />
          </Link>
          <Link to="/new-product">
            <h6 className="txt-clr mrg-right-70 cursor-pointer">
              ADD NEW PRODUCT
            </h6>
          </Link>
          <img
            className="icon-height mrg-right-50 cursor-pointer"
            src={Notification}
            alt=""
            onClick={() => {
              show2 ? setShow2(false) : setShow2(true);
            }}
          />

          <img
            className="profile-height mrg-right-5 "
            src={ProfilePic}
            alt=""
          />
          <div className="mrg-right-50">
            <span className="fnt-w-700 cursor-pointer">
              <Link to="/profile">
                <h5>Craig Riley</h5>
              </Link>
            </span>

            {/* <div className="fnt-w-500">
              <p href="#" className="a-tag">
                $34.00 USD
              </p>
            </div> */}
          </div>
          <img
            className="cursor-pointer"
            src={Dot}
            alt=""
            onClick={() => {
              show ? setShow(false) : setShow(true);
            }}
          />
        </form>
      </nav>
      {show && (
        <div className="model">
          <div>
            <Link to="/message">
              <h6>Message</h6>
            </Link>
            <hr></hr>
            <Link to="/message">
              <h6>Change Password</h6>
            </Link>
            <hr></hr>
            <Link to="/message">
              <h6>Log Out</h6>
            </Link>
          </div>
        </div>
      )}
      {show2 && (
        <div className="model-2">
          <div>
            <h6 className="txt-clr">Notifications</h6>
            <p className="fnt-s-14 mrg-top-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
            <p className="p-view fnt-s-14">VIEW</p>
          </div>
        </div>
      )}
    </div>
  );
};
