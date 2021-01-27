import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'

import GifItem from './gifItem'
import useFetchGifs from '../hooks/useFetchGifs';

const GifGrid = ({category}) => {

  const {loading, data:gifs} = useFetchGifs(category);

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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
 
export default GifGrid;