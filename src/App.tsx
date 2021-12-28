import React from 'react';
import './App.css';
import MoviesHome from './MoviesHome';
import Watchlist from './Watchlist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';


function App() {
  return (
    <>
   
    <div className="Routes">
      <Router>

          <Navbar/>
          
          <Routes>
          <Route path='/' element={< MoviesHome />} />
          <Route path='/Watchlist' element={<Watchlist />} />
          </Routes>

        </Router>
    </div>
    </>
  //   <Route
  //   path="*"
  //   element={<Navigate to="/" />}
  // />

  );
}

export default App;
