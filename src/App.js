import React from 'react';
import {Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import ProductContainer from "./components/ProductContainer";
import CheckoutPage from "./components/CheckoutPage";

function App() {
  return (
     <Router>
      <div className="App">
       <Navbar />
               <Switch>   
                     <Route exact path="/" component={ProductContainer} />         
                     <Route path="/cart" component={CheckoutPage} />                                      
               </Switch>
      </div>
     </Router>
  );
}

export default App;
