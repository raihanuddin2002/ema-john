import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import OrderReview from "./components/OrderReview/OrderReview";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import Shop from './components/Shop/Shop';
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header> 
        
            <Switch>
          
              <Route path="/shop">
                <Shop></Shop>
              </Route>
              <Route path="/order-review">
                <OrderReview></OrderReview>
              </Route>
              <Route path="/inventory">
                <Inventory></Inventory>
              </Route>
              <PrivateRoute path="/placeorder">
                <PlaceOrder></PlaceOrder>
              </PrivateRoute>

              <Route path="/login">
                <Login></Login>
              </Route>

              <Route path="/register">
                <Register></Register>
              </Route>

              <Route exact path="/">
                <Shop></Shop>
              </Route>

              <Route  path="*">
                <NotFound></NotFound>
              </Route>

            </Switch>
      </Router>
    
    </AuthProvider>
  );
}

export default App;
