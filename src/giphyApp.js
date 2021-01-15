import React, { useState } from 'react';
import AddCategory from './components/addCategory'
import GifGrid from './components/gifGrid'

const GiphyApp = () => {
  const [categories, setCategories] = useState(['Ironman'])

  return ( 
    <div>
      <h2>Giphy App</h2>
      <AddCategory setCategories={setCategories}/>
      {categories.map((category) => {
        return <GifGrid key={category} category={category}/>
      })}
    </div>
  );
}
 
export default GiphyApp;