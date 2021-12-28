


function Watchlist( ) {
    return (
        <>
        <div>
            <h1>REELZ</h1>
            <h2>Watchlist</h2>
        </div>

        <div>
            <img src="" alt="" />
            <p>
            {/* Insert current {Year} */}
                <h3>Title</h3> 
                
                {/* Insert description from api */}
                <h4>Description</h4>
                </p>

                <div className="fav-btn">
                
                <span style={{ 
                color: 'PaleVioletRed',
                 fontSize: 200 + '%' }}>&hearts;</span> 
                 </div>

            <h3>Watched</h3>
            <input type="checkbox" />
        </div>
        </>
    )
}

export default Watchlist;