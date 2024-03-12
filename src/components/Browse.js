import React from 'react'
import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/* <h1>Browse page</h1> */}
      {/*
        Main Container
          - Video Background
          - Video Title
        Secondary Container
         - Movie List * n
            -  Movie Cards * n
      */}
    
    </div>
  )
}

export default Browse