import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";
//import openai from "../utils/openai";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query= " +
        movie +
        "include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const Prompt =
      "Act as a Movie Recommendation system and suggestion " +
      searchText.current.value +
      "only give me name of 5 moives, comma seperated ";

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(Prompt);

    console.log(result.response.text());

    /*  const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    */

    //console.log(gptResults.choices?.[0]?.message?.content);

    //const gptMovies = gptResults.choices?.[0]?.message?.content.split(","); // list of movies coming from gpt suggestions

    //the next line is give  us promise not a result
    // const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie)); // for each movie suggestion from gpt give to us,we will search that movie in tmdb

    //    const tmdbResults = await Promise.all(promiseArray); // when all the promise are resolved then the we got the result
  };

  return (
    <div className="pt-[45%] md:pt-10%] flex justify-center ">
      <form
        className="w-full  md:w-1/2 bg-gray-950  grid grid-cols-12 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 m-4 col-span-9 rounded-md"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />

        <button
          className="col-span-3 m-4 px-4 py-2 bg-red-700 rounded-md"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
