import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/navbar.jsx';
import Home from './components/Home.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <SpeedInsights />
    </Router>
  );
}

export default App;
