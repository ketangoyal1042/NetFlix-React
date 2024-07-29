import React from 'react'
import { useSelector } from 'react-redux'
import VidoeTitle from './VidoeTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector((store)=> store.movies?.nowPlayingMovies);
    if(!movies.length) return;
    const mainMovie = movies[1];
    const {original_title, overview, id} = mainMovie;
  return (

    <div>
        <VidoeTitle title={original_title} overview={overview}/>
        <VideoBackground moviewId={id}/>
    </div>
  )
}

export default MainContainer