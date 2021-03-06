/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Link } from "react-router-dom";
export default () => {
  return (
    <>
      <div className="d-flex justify-content-center bglightgrey logins-container">
        <div className="container d-flex justify-content-center pd-top-51-5 pd-bottom-51-5">
          <div className="col-5 pd-60 bgwhite bd-rad-8">
            <div className="txt-align-cntr">
              <h5>Vendor account</h5>
              <p className="pd-top-10">
                Lorem Ipsem dolor sit amet,consetetur sadipscing elitr
              </p>
              <div className="d-flex flex-column txt-align-start pd-top-30">
                <label className="color-grey pd-left-13">Email Address</label>
                <input
                  className="signloginput bd-rad-8 align-selfcenter"
                  placeholder="example@gmail.com"
                ></input>
              </div>
              <div className="d-flex flex-column txt-align-start pd-top-20">
                <label className="color-grey pd-left-13">New Password</label>
                <input
                  className="signloginput bd-rad-8 align-selfcenter"
                  type="password"
                  placeholder="***********"
                ></input>
              </div>
              <div className="pd-top-30">
                <Link to="/store">
                  <button className="signlogbtn bgdarkgrey">LOGIN</button>
                </Link>
              </div>
              <Link to="/resetpassone">
                <p className="pd-top-20">Forget Password</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
