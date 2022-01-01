import React from 'react';
// API
import API from '../API';
// Config
import { POSTER_SIZE, IMAGE_BASE_URL } from '../config';
// Components
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './Searchbar';
import Button from './Button';

// Hook
import { useHomeFetch } from '../Hooks/useHomeFetch';


const Home: React.FC = () => {
  const {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore
  } = useHomeFetch();

  // console.log(state);

  if (error) return <div>Something went wrong ...</div>;

  return (
    <>

      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {state.results.map(movie => (
          <Thumb
            key={movie.id}
            clickable
            image={movie.poster_path= IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path}
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text='Load More' callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;