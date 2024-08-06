import React from 'react'

const VidoeTitle = ({title, overview}) => {
  return (
    <div className='pt-[45%] md:pt-[20%] px-2 md:px-24 absolute w-screen aspect-video text-white bg-gradient-to-r from-black'>
      <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
      <p className='py-1 md:py-6 text-lg w-full md:w-1/4'>{overview}</p>
      <div className='mt-3'>
        <button className="bg-white text-black p-3 px-11 text-xl rounded-lg hover:opacity-50">Play</button>
        <button className="mx-2 bg-gray-500 text-white p-3 px-11 text-xl bg-opacity-50 rounded-lg hover:opacity-45">More Info</button>
      </div>
    </div>
  )
}

export default VidoeTitle