/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';

import ReactDOM from 'react-dom/client'
import App from './pages/home.jsx'
// import './index.css'
// import './styles.css'
import 'semantic-ui-css/semantic.min.css'
import HomepageLayout from './pages/home.jsx'
import signupForm from './pages/signup.jsx';
// import loginform from './pages/login.jsx';


const navbar = () => {
  return (
    <Switch>
        
        <Router exact path="signup" component={signupForm} />    
        <Route exact path="" component={HomepageLayout} />

    </Switch>
  );
};``

export default navbar;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

