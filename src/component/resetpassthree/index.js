/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
import Emailicon from "../../assets/images/icons/emailicon.png";
import { Link } from "react-router-dom";
export default () => {
  return (
    <>
      <div className="d-flex justify-content-center bglightgrey">
        <div className="container d-flex justify-content-center pd-top-83-5 pd-bottom-83-5">
          <div className="col-5 pd-60 bgwhite bd-rad-8">
            <div className="txt-align-cntr d-flex flex-column aln-itm-c">
              <div className="resetimgtick bd-rad-20">
                <img src={Emailicon} alt="not found" />
              </div>
              <div className="resetpassthree">
                <h5 className="pd-top-40">Password Reset Successful</h5>
                <p className="pd-top-20">
                  You have successfuly reset your password. Please use your new
                  password to login.
                </p>
                <div className="pd-top-40">
                  <Link to="/store">
                    <button className="signlogbtn bggrey">
                      STAY LOGGED IN
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
