import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GptSearchBar = () =>{

    const langKey = useSelector((store) => store.config.lang);
    //we are declaring langKey using [] because it is not an object of lang. Now, [langKey] will act as an array object.

    return (
    <div className="pt-[8%] flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12">
            <input type="text" className="p-4 m-4 col-span-9" placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className="py-2 px-4 bg-red-600 text-white rounded-lg col-span-3 m-4">{lang[langKey].search}</button>
{/* Each text should come from constant file */}
        </form>


    </div>
)}

export default GptSearchBar;