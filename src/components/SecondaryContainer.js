import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';


const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies &&(
      <div className='bg-black'>
        <div className='-mt-32 pl-12 relative z-24'>
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
          <MovieList title={"Popular"} movies={movies.popularMovies}/>
          <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
          <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies}/>
        </div>
      </div>
    )
  )
}

export default SecondaryContainer