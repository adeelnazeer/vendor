import { Route, BrowserRouter } from "react-router-dom";

import MyOrder from "./container/myOrder";
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
