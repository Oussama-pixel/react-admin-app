import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.scss";
import Home from './pages/home/Home';
import {BrowserRouter as Router,Route, Switch } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';


function App() {

  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/users" exact>
            <UserList/>
          </Route>
          <Route path="/user/:id" exact>
            <User/>
          </Route>
          <Route path="/newUser">
            <NewUser/>
          </Route>
          <Route path="/products">
            <ProductList/>
          </Route>
          <Route path="/product/:id">
            <Product/>
          </Route>
          <Route path="/newproduct">
            <NewProduct/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
