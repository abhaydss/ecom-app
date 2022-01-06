// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import './index.css'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={< Home />}></Route>
      <Route exact path='/cart' element={< Cart />}></Route>
      <Route exact path='/register' element={< Register/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
      <Route exact path='/product' element={<ProductList/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
