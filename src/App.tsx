
import './App.css';
import MoviesHome from './MoviesHome';
import { BrowserRouter as Router } from 'react-router-dom'

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
