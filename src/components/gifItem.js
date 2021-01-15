import React from 'react';

const GifItem = ({id, title, url}) => {
  return (
    <div className='card-item'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
}
 
export default GifItem;