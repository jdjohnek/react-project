import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


function MoviesHome(  ) {


    return (
        <>
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Movies</Link></li>
                    <li><Link to=' /watchlist '>Watchlist</Link></li>
                    <li><Link to=' /favorites '>Favorites</Link></li>
                </ul>
            </nav>
        </div>

        <div>
            <h1>REELZ</h1>
        </div>

        <div>
            <input type="text" name="search-bar" id="" />
        </div>

        <div>
            <h2>Movies of INSERT CURRENT YEAR</h2>
        </div>

        <div>
            <img src="" alt="" />
            <p>
            {/* Insert current {Year} */}
                <h3>Title</h3> 
                <p>
                {/* Insert description from api */}
                <h4>Description</h4>
                </p>

                <div className="fav-btn">
                
                <span style={{ 
                color: 'PaleVioletRed',
                 fontSize: 200 + '%' }}>&hearts;</span> 
                 </div>



            </p>
        </div>
        </>

    )
    
}

export default MoviesHome;