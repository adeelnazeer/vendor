/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import Logo from "../../assets/images/black.png";
import Search from "../../assets/images/icons/Search.png";
import Notification from "../../assets/images/icons/Notifications.png";
import ProfilePic from "../../assets/images/Profile_pic_1.png";
import Dot from "../../assets/images/icons/Dot_menu.png";
import { Link } from "react-router-dom";
import "./style.scss";

export default () => {
  const [show, setShow] = useState(false);
  return (
    <div className="container-fluid bg-color-gray">
      <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand">
          <img className="logo" src={Logo} alt="" />
        </span>

        <form class="form-inline">
          <img className="icon-height mrg-right-30" src={Search} alt="" />

          <img className="icon-height mrg-right-30" src={Notification} alt="" />

          <img
            className="profile-height mrg-right-5 "
            src={ProfilePic}
            alt=""
          />
          <div className="mrg-right-30">
            <span className="fnt-w-700">Turner Oaks</span>

            <div className="fnt-w-500">
              <p href="#" className="a-tag">
                $34.00 USD
              </p>
            </div>
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
            <Link to="/invitation">
              <h6>Invitations</h6>
            </Link>
            <hr></hr>
            <Link to="/buddy-list">
              <h6>Buddy List</h6>
            </Link>
            <hr></hr>
            <Link to="/workout-list">
              <h6>My Workouts LIst</h6>
            </Link>
            <hr></hr>
            <Link to="/order-list">
              <h6>Order List</h6>
            </Link>
            <hr></hr>
            <Link to="/subscription">
              <h6>My Subscription</h6>
            </Link>
            <hr></hr>
            <Link to="/buddy-list">
              <h6>Bugs Reports</h6>
            </Link>
            <hr></hr>
            <Link to="/payment">
              <h6>Add Payment Method</h6>
            </Link>
            <hr></hr>
            <Link to="/dashboard">
              <h6>Privacy Policy</h6>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
