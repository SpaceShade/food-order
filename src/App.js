import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import './App.css';
import Detail from './pages/detail';
import Summary from './pages/summary';
import History from './pages/history';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
