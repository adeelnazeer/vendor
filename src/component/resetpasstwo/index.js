/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Emailicon from "../../assets/images/icons/emailicon.png";
import { Link } from "react-router-dom";
export default () => {
  return (
    <>
      <div className="d-flex justify-content-center bglightgrey">
        <div className="container d-flex justify-content-center pd-top-84-5 pd-bottom-84-5">
          <div className="col-5 pd-87 bgwhite bd-rad-8">
            <div className="txt-align-cntr">
              <h5 className="fnt-size-24 clr-darkgray">Set New Password</h5>
              <div className="">
                <div className="d-flex flex-column txt-align-start pd-top-50">
                  <label className="color-grey">New Password</label>
                  <input
                    className="signloginput bd-rad-8"
                    type="password"
                    placeholder="*************"
                  ></input>
                </div>
                <div className="d-flex flex-column txt-align-start pd-top-20">
                  <label className="color-grey">Confirm Password</label>
                  <input
                    className="signloginput bd-rad-8"
                    type="password"
                    placeholder="*************"
                  ></input>
                </div>
                <div className="pd-top-20">
                  <Link to="/resetpassthree">
                    <button className="signlogbtn bgdarkgrey">
                      SET NEW PASSWORD
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
