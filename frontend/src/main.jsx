/* eslint-disable react/no-deprecated */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import SignupForm from '../pages/signup.jsx';
import HomepageLayout from '../pages/home.jsx'
import Loginform from '../pages/login.jsx';
import {Cartpage, Items } from '../pages/cart.jsx';

fetch("/api")
  .then((response) => response.json())
  .then(data => {
    console.log("Data fetched from /api:", data);
  })
  .catch(err => {
    console.log("Error fetching from /api:", err);
  });

const Navbar =  () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup.jsx" component={<SignupForm/>} />    
      </Routes>
    </Router>
  );
};

export default Navbar;


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomepageLayout />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<Loginform />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/cart" element={<Items />} />

      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
