import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();

    //this is a part of memoization. We are saying that if nowplayingmovies has data, it should not fetch and run an api call again.
  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

    const getNowPlayingMovies = async() =>{ 
      const data = await  fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS); 
      const json = await data.json();
      console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
    }
  
    //now we will call the FETCH API from TMDB inside useEffect()
    useEffect(()=>{
      if(!nowPlayingMovies) getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;