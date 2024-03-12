import React from 'react'
import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGptSearch = useSelector((store) =>store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();

  return (
    //Need to introduce a Toggle functionality for the GPT Search component. 
    <div>
      <Header />
      {
        showGptSearch ? (<GptSearch/>) : (<><MainContainer/> <SecondaryContainer/></>) //wrapping inside React Fragment, else it will give error. 
                    }
      
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