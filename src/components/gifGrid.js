import React, {useState, useEffect} from 'react';
import GifItem from './gifItem'
import {getGifs} from '../helpers/getGifs'

const GifGrid = ({category}) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs(category).then(setGifs)
  },[category])


  return (
    <>
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