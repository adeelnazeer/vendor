/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
export default () => {
  return (
    <>
      <div className="d-flex justify-content-center bglightgrey logins-container">
        <div className="container d-flex justify-content-center pd-top-96-5 pd-bottom-96-5">
          <div className="col-5 pd-60 bgwhite bd-rad-8">
            <div className="txt-align-cntr">
              <h5>Vendor account</h5>
              <p className="pd-top-10">
                Lorem Ipsem dolor sit amet,consetetur sadipscing eli's
              </p>
              <div className="pd-top-50">
                <Link to="/signstepone">
                  <button className="signlogbtn bgdarkgrey">SIGN UP</button>
                </Link>
              </div>
              <div className="pd-top-20">
                <Link to="/store">
                  <button className="signlogbtn bggrey">LOGIN</button>
                </Link>
              </div>
              <p className="pd-top-40">Forget Password</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
