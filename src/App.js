import Product from "./components/Product"
import './App.css';
import Navbar from "./components/Navbar";
import ProductContainer from "./components/ProductContainer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProductContainer/>
      {/*<Product/> */}
    </div>
  );
}

export default App;
