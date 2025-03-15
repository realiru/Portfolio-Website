import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import './App.css';
import Home from './components/Home.jsx';
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
