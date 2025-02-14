import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import './App.css';
import Home from './components/pages/Home.js';
import Services from './components/pages/Services.js';
import SignUp from './components/pages/SignUp.js';
import Products from './components/pages/Products.js';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
