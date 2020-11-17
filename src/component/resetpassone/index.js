import React from "react";
import "./style.scss";
import Emailicon from "../../assets/images/icons/emailicon.png";
export default () => {
  return (
   <>
   <div className="d-flex justify-content-center bglightgrey">
    <div className="container d-flex justify-content-center pd-top-84 pd-bottom-84">
        <div className="col-5 pd-60 bgwhite bd-rad-8">
        <div className="txt-align-cntr d-flex flex-column aln-itm-c">
            <h5>Reset Password</h5>
            <p className="pd-top-10">Select which details should be used to reset your password
            </p>
            <div className="col-10 pd-top-40 pd-bottom-40 bglightgrey mrg-top-50 mrg-bottom-50 bd-rad-8">
            <div className="d-flex justify-content-between">
            <div className="resetimg bd-rad-20">
             <img src={Emailicon} alt="not found"/>
            </div>
            <div className="txt-align-start pd-top-10">
              <h5 className="fnt-w-400">Via Email</h5>
              <p>*****@gmail.com</p>
            </div>
            </div>
            </div>
        </div>
        </div>
    
    </div>
   </div>
   </>
  );
};
