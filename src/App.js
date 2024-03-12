import React, { useEffect, useState } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import ProductContainer from './components/store/ProductContainer';
import CheckoutPage from './components/cart/CheckoutPage';
import Signin from './components/user/Signin';
import Signup from './components/user/Signup';
import Checkout from './components/cart/Checkout';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import OneSignal from 'react-onesignal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [hasDisplayedToast, setHasDisplayedToast] = useState(false);
  const [initialized, setInitialized] = useState(false);
  
  useEffect(() => {
    OneSignal.init({
      appId: '28d698a7-ed50-41ce-bf3d-0116d96f44e4'
    }).then(() => {
      setInitialized(true);
      OneSignal.Slidedown.promptPush();
    }).catch(error => {
      console.error('Error initializing OneSignal:', error);
    });
  }, []);

  useEffect(() => {
    const eventListener = (event) => {
      const notification = event?.notification;
      if (notification && notification.title && notification.body && !hasDisplayedToast) {
        toast.info(`${notification.title}: ${notification.body}`);
        setHasDisplayedToast(true);

        // Restablecer hasDisplayedToast después de 5 segundos
        setTimeout(() => {
          setHasDisplayedToast(false);
        }, 3000);
      }
    };

    OneSignal.Notifications.addEventListener('foregroundWillDisplay', eventListener);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      OneSignal.Notifications.removeEventListener('foregroundWillDisplay', eventListener);
    };
  }, [hasDisplayedToast]);

  useEffect(() => {
    // Verificar si hay datos en caché al cargar la aplicación
    const cachedData = localStorage.getItem('cachedData');
    if (cachedData) {
      // Si hay datos en caché, actualizar el estado con los datos
      dispatch({
        type: actionTypes.SET_CACHED_DATA,
        cachedData: JSON.parse(cachedData),
      });
    }
  }, [dispatch]);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductContainer} />
          <Route path="/cart">{user ? <CheckoutPage /> : <ProductContainer />}</Route>
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/Checkout">{user ? <Checkout /> : <ProductContainer />}</Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
