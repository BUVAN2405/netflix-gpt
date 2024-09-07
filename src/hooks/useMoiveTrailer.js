import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moivesSlice";
//fetch trailer video && updating the store with trailer video data

const useMoiveTrailer = (moivesId) => {
  const dispatch = useDispatch();
  const getMoiveVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        moivesId +
        " /videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMoiveVideos();
  }, []);
};

export default useMoiveTrailer;
