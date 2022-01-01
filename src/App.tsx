import React from 'react';
// Watchlist page
import Watchlist from './Watchlist';
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Sidebar
import Navbar from './components/Sidebar/Navbar';
// Components
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

function App() {



  return (
    <>


    <div className="Routes">
      <Router>

          <Navbar/>
          
          <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/:movieId' element={<Movie />} />
          <Route path='/Watchlist' element={<Watchlist />} />
          <Route path='/*' element={<NotFound />} />
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
