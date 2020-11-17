import { Route, BrowserRouter } from "react-router-dom";

import MyOrder from "./container/myOrder";
import Loginsignup from "./component/loginsignup/index";
import Signupstepone from "./component/signupstepone/index";
import Signupsteptwo from "./component/signupsteptwo/index";
import Signupstepthree from "./component/signupstepthree/index";
import Resetpassone from "./component/resetpassone/index";
import Resetpasstwo from "./component/resetpasstwo/index";
import Resetpassthree from "./component/resetpassthree/index";
import Login from "./component/login/index";
import "./assets/css/style.scss";
// import "./asset/css/style.scss";

function App() {
  return (
    <BrowserRouter>
      <Route path={"/myorder"} exact component={MyOrder} />
      <Route path={"/"} exact component={Loginsignup}/>
      <Route path={"/signstepone"}exact  component={Signupstepone}/>
      <Route path={"/signsteptwo"} exact component={Signupsteptwo}/>
      <Route path={"/signstepthree"} exact component={Signupstepthree}/>
      <Route path={"/resetpassone"} exact component={Resetpassone}/>
      <Route path={"/resetpasstwo"} exact component={Resetpasstwo}/>
      <Route path={"/resetpassthree"} exact component={Resetpassthree}/>
      <Route path={"/login"} exact component={Login}/>
    </BrowserRouter>
  );
}

export default App;
