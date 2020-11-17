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
import Sales from "./container/sales";
import Finacne from "./container/financeReport";
import Transaction from "./container/transaction";
import Conatct from "./container/contactZurvos";
import Vendor from "./container/vendorPolicy";
import FeedBack from "./container/feedback";
import MyStore from "./container/myStore";
import AllProduct from "./container/allProducts";
import Profile from "./container/profile";
import AddNewProduct from "./container/addNewProduct";
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

      <Route path={"/sales"} exact component={Sales} />
      <Route path={"/finance"} exact component={Finacne} />
      <Route path={"/transaction"} exact component={Transaction} />
      <Route path={"/contact"} exact component={Conatct} />
      <Route path={"/vendor-policy"} exact component={Vendor} />
      <Route path={"/feedback"} exact component={FeedBack} />
      <Route path={"/store"} exact component={MyStore} />
      <Route path={"/all-product"} exact component={AllProduct} />
      <Route path={"/profile"} exact component={Profile} />
      <Route path={"/new-product"} exact component={AddNewProduct} />

    </BrowserRouter>
  );
}

export default App;
