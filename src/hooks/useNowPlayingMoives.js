import { addNowPlayingMoives } from "../utils/moivesSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMoives = () => {
  //fetch data from TMDB API and update store

  const dispatch = useDispatch();

  const getNowPlayingMoives = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addNowPlayingMoives(json.results));
  };

  useEffect(() => {
    getNowPlayingMoives();
  }, []);
};

export default useNowPlayingMoives;
