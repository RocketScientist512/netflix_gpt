import { useSelector , useDispatch} from "react-redux";
import {useRef} from "react"
import lang from "../utils/languageConstant";
import openai from "../utils/openai";
import {API_OPTIONS} from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () =>{
    const dispatch = useDispatch();

    const langKey = useSelector((store) => store.config.lang);
    //we are declaring langKey using [] because it is not an object of lang. Now, [langKey] will act as an array object.

    //to get data from input box of form, useRef() would be helpful
    const searchText = useRef();

    //movie search in TMDB
    const searchMovieTMDB= async(movie) =>{
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();

        return json.results;
    };

    const handleGptSearchClick = async() => {
        console.log(searchText.current.value);
        //make an api call to gpt api and get movie results

        //we need to give a good prompt to gpt so that it is able to formalize results better. 
        const gptQuery= "Act as a movie recommendation system and suggest some movies for the query: " + searchText.current.value + " only give me names of 5 movies, comma seperated. Like the following example: Fighter, Joker, Don, Dune, Kung Fu Panda";

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });

          if(!gptResults.choices){
            //error handling in case no response found
          }

          console.log(gptResults.choices?.[0].message?.content);
          const gptMovies= gptResults.choices?.[0].message?.content.split(",");

          const promiseArray =  gptMovies.map((movie) => searchMovieTMDB(movie));
          //The above line 'promiseArray' returns the value in an array format. Now, we need to be able to read this in a proper content manner. To do that, we use 'Promise.all()'
          const tmbdResults = await Promise.all(promiseArray);
          console.log(tmbdResults);

          dispatch(
            addGptMovieResult( { movieNames: gptMovies, movieResults: tmbdResults })
            );

    };

    return (
    <div className="pt-[8%] flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=> e.preventDefault()}>
            <input ref={searchText} type="text" className="p-4 m-4 col-span-9" placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className="py-2 px-4 bg-red-600 text-white rounded-lg col-span-3 m-4" onClick={handleGptSearchClick}>{lang[langKey].search}</button>
{/* Each text should come from constant file */}
        </form>


    </div>
)}

export default GptSearchBar;