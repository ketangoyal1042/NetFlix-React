import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { langDict } from '../utils/languageConstants';
import { client } from '../utils/openAI';
import { MOVIES_HEADER } from '../utils/constants';
import { addGPTResults } from '../utils/gptSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector(store=> store.language.lang);
  const searchQuery = useRef(null);
  let moviewsSearchDummpy = ['Sholay', 'Dangal', 'Baahubali', '3 Idiots'];

  const searchMovieTMDB = async (movie)=> {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, MOVIES_HEADER);
    const result = await res.json();
    return result.results;
  }

  const handleSearch = async () => {
    // const query = "Act as a movie recommendation system and suggests some movies for the query: " + searchQuery.current.value + " in "  + langDict?.[langKey] + ". only gives me 5 movies, comma separated like the example results ahead : Rama, fookrey, janab, topibaaz, animal";
    // const chatCompletion = await client.chat.completions.create({
    //   messages: [{ role: 'user', content: 'Say this is a test' }],
    //   model: 'gpt-3.5-turbo',
    // });
    // console.log(chatCompletion);
    // moviewsSearchDummpy.unshift(searchQuery.current.value);
    moviewsSearchDummpy = [searchQuery.current.value, ...moviewsSearchDummpy];
    const promoiseList = moviewsSearchDummpy.map((movie)=> searchMovieTMDB(movie))
    // console.log(promoiseList);
    const movieObj = await Promise.all(promoiseList);
    console.log(movieObj);
    dispatch(addGPTResults({movies: movieObj, search: moviewsSearchDummpy}));
  }
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-full md:w-1/2 grid grid-cols-12' onSubmit={(e)=> e.preventDefault()}>
            <input type="text" placeholder={langDict?.[langKey]?.suggestion} className='p-4 m-4 col-span-9 rounded-sm' ref={searchQuery}/>
            <button className='m-4 py-2 px-4 bg-red-800 text-white rounded-md col-span-3' onClick={handleSearch}>{langDict?.[langKey]?.search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar