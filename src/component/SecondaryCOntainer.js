import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryCOntainer = () => {
    const movies = useSelector((store)=> store.movies);
    console.log("m", movies);
  return (
    movies.nowPlayingMovies && (
    <div className=' bg-black px-6'>
        <div className='-mt-52 relative z-20'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Trending"} movies={movies.trending}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Upcoming"} movies={movies.upcoming}/>

    </div>
    </div>
    )
  )
}

export default SecondaryCOntainer

{/**
    MovieList- Popular
    - MovieCard *n
    MovieList- Now Playong
    MovieList- Trending
    MovieList- Horror
    */}