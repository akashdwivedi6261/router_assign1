import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AllProducts from "./components/AllProducts";
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<AllProducts />}/>
      
        <Route path='products/:id' element={<ProductDetails />} />
        {/* <Outlet /> */}
      </Routes>
    </div>
  );
}

export default App;
