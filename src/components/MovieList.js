import React from 'react'
import MoviewCard from './MoviewCard'

const MovieList = ({title, movies}) => {
  return (
    <div className='px-6 '>
      <h1 className='text-3xl pt-6 px-6 text-white'>{title}</h1>
    <div className='flex overflow-x-scroll scroll-smooth no-scrollbar '>
      <div className='flex'>
        {movies && movies?.map(movie=><MoviewCard key={movie?.id} posterPath={movie?.poster_path}/>)}
      </div>
    </div>
    </div>
  )
}

export default MovieList