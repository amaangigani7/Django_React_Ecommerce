import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductList from "./screens/ProductList";
import ProductEdit from "./screens/ProductEdit";
import OrderList from "./screens/OrderList";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route path="/" exact>
              <HomeScreen />
            </Route>
            <Route path="/product/:id">
              <ProductScreen />
            </Route>
            <Route path="/cart/:id?">
              <CartScreen />
            </Route>
            <Route path="/login">
              <LoginScreen />
            </Route>
            <Route path="/register">
              <RegisterScreen />
            </Route>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
            <Route path="/shipping">
              <ShippingScreen />
            </Route>
            <Route path="/payment">
              <PaymentScreen />
            </Route>
            <Route path="/placeorder">
              <PlaceOrderScreen />
            </Route>
            <Route path="/order/:id">
              <OrderScreen />
            </Route>

            <Route path="/admin/userlist">
              <UserListScreen />
            </Route>
            <Route path="/admin/user/:id/edit">
              <UserEditScreen />
            </Route>
            <Route path="/admin/products">
              <ProductList />
            </Route>
            <Route path="/admin/product/:id/edit">
              <ProductEdit />
            </Route>
            <Route path="/admin/orders">
              <OrderList />
            </Route>
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
