import React from 'react';
import HomePage from './components/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
       </Routes>
  );
}

export default App;