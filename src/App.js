import React from 'react';
import {Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import ProductContainer from "./components/ProductContainer";
import CheckoutPage from "./components/CheckoutPage";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  return (
     <Router>
      <div className="App">
       <Navbar />
               <Switch>   
                     <Route exact path="/" component={ProductContainer} />         
                     <Route path="/cart" component={CheckoutPage} /> 
                     <Route path="/signin" component={Signin} />
                     <Route path="/signup" component={Signup} />                                    
               </Switch>
      </div>
     </Router>
  );
}

export default App;
