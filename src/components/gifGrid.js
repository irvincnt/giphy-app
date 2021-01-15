import React, {useState, useEffect} from 'react';
import GifItem from './gifItem'
import useFetchGifs from '../hooks/useFetchGifs';

const GifGrid = ({category}) => {

  const {loading, data:gifs} = useFetchGifs(category);
  console.log(gifs, loading)

  return (
    <>
      {loading && <p>LOADING...</p>}
      <h2>{category}</h2>
      <div className='cards'>
        {gifs.map((gif) => {
          return (
            <GifItem 
              key={gif.id}
              {...gif}
            />
          )
        })}
      </div>
    </>
  );
}
 
export default GifGrid;