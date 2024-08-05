import React from 'react'
import { TMD_IMG_URL } from '../utils/constants'

const MoviewCard = ({posterPath}) => {
    const imgPath = posterPath?TMD_IMG_URL+posterPath:'/images/No_Image_Available.jpg';
  return (
    <div className='w-60 p-2'>
        <img src={imgPath} alt="Movie Card" />
    </div>
  )
}

export default MoviewCard