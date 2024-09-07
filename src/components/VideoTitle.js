const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[18%] px-14   absolute text-white bg-gradient-to-b from-black  ">
      <h1 className="text-4xl font-bold ">{title}</h1>
      <p className=" w-2/6 py-6 font-normal text-sm">{overview}</p>
      <div>
        <button className="px-10 text-black text-lg bg-white py-2 rounded-md   hover:bg-opacity-80">
          Play
        </button>
        <button className=" mx-2 px-10 text-lg bg-gray-500 py-2 rounded-md bg-opacity-60 ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
