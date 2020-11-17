/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Link } from "react-router-dom";
export default () => {
  return (
    <>
      <div className="d-flex justify-content-center bglightgrey">
        <div className="container d-flex justify-content-center pd-top-50-5 pd-bottom-50-5">
          <div className="col-5 pd-70 bgwhite bd-rad-8">
            <div className="txt-align-cntr">
              <p>STEP: 03</p>
              <h5>Sign Up</h5>
              <div className="d-flex flex-column txt-align-start pd-top-40">
                <label className="color-grey">Add PayPal Account</label>
                <input
                  className="signloginput bd-rad-8"
                  placeholder="example@gmail.com"
                ></input>
              </div>
              <div className="d-flex flex-column txt-align-start pd-top-40">
                <p>
                  Add your identity verification documents such as
                  passport,driver's licence,etc
                </p>
              </div>
              <div className="">
                <button className="signlogbtn bggrey">UPLOAD FILE</button>
              </div>
              <div className="pd-top-40">
                <Link to="/login">
                  <button className="signlogbtn bgdarkgrey">
                    REIGISTER AS A VENDOR
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
