import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ moviewId }) => {
  const videoTrailer = useSelector(store => store.movies.trailerVideo);

  useMovieTrailer(moviewId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video "
        src={"https://www.youtube.com/embed/"+videoTrailer?.key+ "?autoplay=1&mute=1&controls=0"}
        title="YouTube video player"
      />
    </div>
  );
};

export default VideoBackground;
