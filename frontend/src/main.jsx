/* eslint-disable react/no-deprecated */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import SignupForm from './pages/signup.jsx';
import HomepageLayout from './pages/home.jsx'
import Loginform from './pages/login.jsx';
import { Product } from './pages/shopping.jsx';


function Navbar() {

  return (
    <Router>
      <Routes>
        <Route path="/signup.jsx" component={<SignupForm />} />
        <Route path="/shopping" element={<product data={Product} />} />
        {/* Any other routes you might have */}

      </Routes>
    </Router>
  );
}

export default Navbar;


ReactDOM.render(
  <React.StrictMode>
    <Router>
      
      <Routes>
        <Route path="/" element={<HomepageLayout />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<Loginform />} />
        <Route path="/shopping" element />

      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
