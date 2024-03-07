import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();

    const getNowPlayingMovies = async() =>{ 
      const data = await  fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS); 
      const json = await data.json();
      console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
    }
  
    //now we will call the FETCH API from TMDB inside useEffect()
    useEffect(()=>{
      getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;