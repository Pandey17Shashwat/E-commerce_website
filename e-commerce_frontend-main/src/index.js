import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import SingleProduct from './pages/SingleProduct';
import {
  BrowserRouter as Router,
  Switch,
  Route,
//   Redirect
  
}from "react-router-dom";


const App=()=>{
//   const user=true
  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route path="/products/:category">
                  <ProductList/>
              </Route>
              <Route path="/product/:id">
                  <SingleProduct/>
              </Route>
              <Route path="/cart">
                  <Cart/>
              </Route>
              <Route path="/login">
                  <Login/>                  
              </Route>
              <Route path="/register">
                  <Register/>
              </Route>
          </Switch>
      </Router>
    
  );
}
ReactDOM.render(<App/>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

