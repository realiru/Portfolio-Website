import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import './App.css';
import Home from './components/Home.js';
import { ThemeProvider } from './contexts/ThemeContext.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
