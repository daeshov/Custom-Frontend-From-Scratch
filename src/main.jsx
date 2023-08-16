import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';

import ReactDOM from 'react-dom/client'
import App from './pages/home.jsx'
// import './index.css'
// import './styles.css'
import 'semantic-ui-css/semantic.min.css'
import HomepageLayout from './pages/home.jsx'
import Form1 from './pages/signup.jsx';


const Ap = () => {
  return (
    <Router>
        <Route exact path='/signup.jsx' component={Form1} />    
        <Route exact path="" component={HomepageLayout} />

    </Router>
  );
};

export default Ap;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

