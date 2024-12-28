import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    console.log("movies", movies);

    if (!movies || movies.length === 0) {
        return <div>No movies available for {title}.</div>;
    }

  return (
    <div className='px-6'>
          <h1 className='text-3xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
        <div className='flex'>
        {/* Map through movies and display MovieCard for each */}
                {movies.map((movie, index) => (
                    <MovieCard key={index} posterPath={movie.poster_path} />
                ))}
                 </div>
        </div>
    </div>
  )
}

export default MovieList