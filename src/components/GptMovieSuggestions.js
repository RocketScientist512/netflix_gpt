import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = ()=> {

    const {movieResults, movieNames}= useSelector((store) => store.gpt);
    

    if(!movieNames) return null; //can also show shimmer ui here. 


    return (
        <div className="p-4 m-2 text-white bg-black bg-opacity-50">
            <div>
                
                {   movieNames.map( (movieName, index) => (
                        <MovieList 
                            key={movieName} 
                            title={movieName} 
                            movies={movieResults[index]}
                        />
                    )) 
                }
            </div>
        </div>
    );
}

export default GptMovieSuggestions