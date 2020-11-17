import React from "react";
import "./style.scss";
export default () => {
  return (
   <>
   <div className="d-flex justify-content-center bglightgrey">
    <div className="container d-flex justify-content-center pd-top-96-5 pd-bottom-96-5">
        <div className="col-5 pd-60 bgwhite bd-rad-8">
        <div className="txt-align-cntr">
            <h5>Vendor account</h5>
            <p className="pd-top-10">Lorem Ipsem dolor sit amet,consetetur
                sadipscing elitr
            </p>
            <div className="pd-top-50">
            <button className="signlogbtn bgdarkgrey">SIGN UP</button>
            </div>
            <div className="pd-top-20">
            <button className="signlogbtn bggrey">LOGIN</button>
            </div>
            <p className="pd-top-40">Forget Password</p>
        </div>
        </div>
    
    </div>
   </div>
   </>
  );
};
