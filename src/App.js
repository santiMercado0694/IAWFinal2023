import { useEffect } from "react";
import {Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductContainer from "./components/ProductContainer";
import CheckoutPage from "./components/CheckoutPage";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Checkout from "./components/Checkout";
import { auth } from "./firebase";
import { actionTypes} from "./reducer";
import { useStateValue} from "./StateProvider"

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
      <Footer/>
      </div>
     </Router>
  );
}

export default App;
