import './App.css';
import Product from "./components/Product"
import Navbar from "./components/Navbar";
import ProductContainer from "./components/ProductContainer";
import CheckoutPage from "./components/CheckoutPage";

function App() {
  window.document.title = 'Bahia Computacion';
  return (
    <div className="App">
      <Navbar/>
      <CheckoutPage/>
      {/*<ProductContainer/> */}
      {/*<Product/> */}
    </div>
  );
}

export default App;
