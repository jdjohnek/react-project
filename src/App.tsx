import React from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesHome from './MoviesHome';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        < MoviesHome />
        </Router>
    </div>
  );
}

export default App;
