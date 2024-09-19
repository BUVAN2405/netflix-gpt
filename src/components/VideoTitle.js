const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[18%] px-6 md:px-14   absolute text-white bg-gradient-to-b from-black  ">
      <h1 className=" text-2xl md:text-4xl font-bold ">{title}</h1>
      <p className="hidden md:inline-block  w-2/6 py-6 font-normal text-sm">
        {overview}
      </p>
      <div className="my-4 md: my-0">
        <button className=" text-black text-lg bg-white   px-5 py-1  md:py-2 px-10  rounded-md   hover:bg-opacity-80">
          Play
        </button>
        <button className=" hidden md:mx-2 px-10 text-lg bg-gray-500 py-2 rounded-md bg-opacity-60 ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
