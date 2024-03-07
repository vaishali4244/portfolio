import React from 'react';
import HomePage from './screens/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import ProjectPage from './screens/ProjectPage';
import './App.css';

function App() {

  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
  );
}

export default App;