import { useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () =>{
    const dispatch = useDispatch();

    //this is a part of memoization. We are saying that if nowplayingmovies has data, it should not fetch and run an api call again.
    const popularMovies = useSelector((store) => store.movies.popularMovies);

    const getPopularMovies = async() =>{ 
      const data = await  fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS); 
      const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }
  
    //now we will call the FETCH API from TMDB inside useEffect()
    useEffect(() => {
      !popularMovies && getPopularMovies();
      // popular movies is not there, then only make the api call
    }, []);
}

export default usePopularMovies;