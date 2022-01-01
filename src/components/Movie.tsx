import React from 'react';
import { useParams } from 'react-router-dom';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// Components
import BreadCrumb from './BreadCrumb';
import Spinner from './Spinner';
import MovieInfo from './MovieInfo';
// import MovieInfoBar from './MovieInfoBar';

// Hook
import { useMovieFetch } from '../Hooks/useMovieFetch';


const Movie: React.FC = () => {
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId as string);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />

    </>
  );
};

export default Movie;