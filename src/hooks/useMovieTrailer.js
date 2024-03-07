import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";


const useMovieTrailer = (movieId) =>{

    const dispatch = useDispatch();
    //fetch trailer here via API call. For that, I need the movie id. 
    const getMovieVideo = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
        const json = await data.json();

        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));

    }

    useEffect(()=>{
        getMovieVideo();
    },[]);

}

export default useMovieTrailer;