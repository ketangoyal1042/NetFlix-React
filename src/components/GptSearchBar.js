import React from 'react'
import { useSelector } from 'react-redux'
import { langDict } from '../utils/languageConstants';

const GptSearchBar = () => {
  const langKey = useSelector(store=> store.language.lang);
  return (
    <div className='pt-[10%] flex justify-center' >
        <form className='bg-black w-1/2 grid grid-cols-12'>
            <input type="text" placeholder={langDict?.[langKey]?.suggestion} className='p-4 m-4 col-span-9 rounded-sm'/>
            <button className='m-4 py-2 px-4 bg-red-800 text-white rounded-md col-span-3'>{langDict?.[langKey]?.search}</button>
        </form>suggestion
    </div>
  )
}

export default GptSearchBar