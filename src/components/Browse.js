import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();

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