import { Route, BrowserRouter } from "react-router-dom";

import MyOrder from "./container/myOrder";
import "./assets/css/style.scss";
// import "./asset/css/style.scss";

function App() {
  return (
    <BrowserRouter>
      <Route path={"/myorder"} exact component={MyOrder} />
    </BrowserRouter>
  );
}

export default App;
