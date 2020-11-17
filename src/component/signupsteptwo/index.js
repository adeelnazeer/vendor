import React from "react";
export default () => {
  return (
   <>
   <div className="d-flex justify-content-center bglightgrey">
    <div className="container d-flex justify-content-center pd-top-27-5 pd-bottom-27-5">
        <div className="col-5 pd-70 bgwhite bd-rad-8">
        <div className="txt-align-cntr">
            <p>STEP: 02</p>
            <h5>Sign Up</h5>
          <div className="d-flex flex-column txt-align-start pd-top-40">
              <label className="color-grey">Store Name</label>
              <input className="signloginput bd-rad-8"></input>
          </div>
          <div className="d-flex flex-column txt-align-start pd-top-20">
              <label className="color-grey">Zip Code</label>
              <input className="signloginput bd-rad-8" type="password" placeholder="*************"></input>
          </div>
          <div className="d-flex flex-column txt-align-start pd-top-20">
              <label className="color-grey">Phone Number</label>
              <input className="signloginput bd-rad-8"></input>
          </div>
            <div className="pd-top-50">
            <button className="signlogbtn bgdarkgrey">NEXT</button>
            </div>
           
        </div>
        </div>
    
    </div>
   </div>
   </>
  );
};
