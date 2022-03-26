import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import QuantityPicker from './components/quantityPicker';
import Catalog from './components/catalog';
import Product from './components/product';
import Header from './components/header';
import About from './components/about';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import Cart from './components/cart';
import Admin from './components/admin';

function App() {
  return ( <div className="App">

    <BrowserRouter>
        <Header></Header>
        <NavBar></NavBar>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path="/catalog" element={<Catalog />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
      </Routes>
        
        <Footer></Footer>
    </BrowserRouter>

      </div> );
}

export default App;

