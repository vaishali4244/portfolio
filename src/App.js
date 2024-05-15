import React from 'react';
import Screen from './screens/index.js';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {

  return (
      <Routes>
        <Route path="/" element={<Screen/>} />
      </Routes>
  );
}

export default App;