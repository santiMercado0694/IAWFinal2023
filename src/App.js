import { useEffect } from "react";
import {Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import DownloadBar from "./components/layouts/DownloadBar";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import ProductContainer from "./components/store/ProductContainer";
import CheckoutPage from "./components/cart/CheckoutPage";
import Signin from "./components/user/Signin";
import Signup from "./components/user/Signup";
import Checkout from "./components/cart/Checkout";
import { auth } from "./firebase";
import { actionTypes} from "./reducer";
import { useStateValue} from "./StateProvider"
import React from "react";

function App() {

  const [{user}, dispatch] = useStateValue();

useEffect(() => {
  auth.onAuthStateChanged((authUser) =>{
    console.log(authUser);
    if(authUser){
      dispatch({
        type : actionTypes.SET_USER,
        user : authUser,
      })
    }
  })
},[dispatch])

  return (
     <Router>
      <div className="App">
       <Navbar />
               <Switch>
                     <Route exact path="/" component={ProductContainer} />         
                     <Route path="/cart" >
                        { user ?(
                          <CheckoutPage/>
                        ):(
                          <ProductContainer/>
                        )}  
                     </Route>
                     <Route path="/signin" component={Signin} />
                     <Route path="/signup" component={Signup} />
                     <Route path="/Checkout">  
                      {user ?(
                        <Checkout/>
                      ):(
                        <ProductContainer/>
                      )} 
                     </Route>                                
               </Switch>
      <DownloadBar/>
      <Footer/>
      </div>
     </Router>
  );
}

export default App;
