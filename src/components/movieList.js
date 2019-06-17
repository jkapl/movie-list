import React from 'react';
import MovieEntry from './MovieEntry.js';

const MovieList = (props) => {
   return ( <div className="movie-list">
       {
           props.movies.map(movie => (
               <MovieEntry movie={movie} />
           ))
       }
    </div>)
}

export default MovieList