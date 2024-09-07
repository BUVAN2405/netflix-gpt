import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
const MainContainer = () => {
  const moives = useSelector((store) => store.moives?.nowPlayingMoives);
  if (!moives) return;

  const mainMoive = moives[1];

  const { original_title, overview, id } = mainMoive; // here were extracting the data

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground moiveId={id} />
    </div>
  );
};

export default MainContainer;
