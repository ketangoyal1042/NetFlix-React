import React from 'react'
import { TMD_IMG_URL } from '../utils/constants'

const MoviewCard = ({posterPath}) => {
  return (
    <div className='w-60 p-2'>
        <img src={TMD_IMG_URL+posterPath} alt="Movie Card" />
    </div>
  )
}

export default MoviewCard