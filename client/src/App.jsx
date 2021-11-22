import Home from "./pages/Home";
import ProductItems from "./pages/ProductItems";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Router>
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductItems />
        </Route>
        <Route path="/product/:id">
          <SingleProduct />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;