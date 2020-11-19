/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Link } from "react-router-dom";
export default () => {
  return (
    <>
      <div className="d-flex justify-content-center bglightgrey logins-container">
        <div className="container d-flex justify-content-center pd-top-27-5 pd-bottom-27-5">
          <div className="col-5 pd-70 bgwhite bd-rad-8">
            <div className="txt-align-cntr">
              <p>STEP: 01</p>
              <h5>Sign Up</h5>
              <div className="d-flex flex-column txt-align-start pd-top-40">
                <label className="color-grey">Email Address</label>
                <input
                  className="signloginput bd-rad-8"
                  placeholder="example@gmail.com"
                ></input>
              </div>
              <div className="d-flex flex-column txt-align-start pd-top-20">
                <label className="color-grey">Set Password</label>
                <input
                  className="signloginput bd-rad-8"
                  type="password"
                  placeholder="***********"
                ></input>
              </div>
              <div className="d-flex flex-column txt-align-start pd-top-20">
                <label className="color-grey">Repeat Password</label>
                <input
                  className="signloginput bd-rad-8"
                  type="password"
                  placeholder="***********"
                ></input>
              </div>
              <div className="pd-top-50">
                <Link to="/signsteptwo">
                  <button className="signlogbtn bgdarkgrey">NEXT</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
