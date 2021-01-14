import React, { useState } from 'react';
import AddCategory from './components/addCategory'
const GiphyApp = () => {
  const [categories, setCategories] = useState(['Uno', 'Dos', 'Tres'])

  const handleAdd = () => {
    setCategories([...categories, 'Cuatro'])
  }

  return ( 
    <div>
      <h2>Giphy App</h2>
      <AddCategory setCategories={setCategories}/>
      <button onClick={handleAdd}>Agregar</button>
      {categories.map((category) => {
        return <li key={category}>{category}</li>
      })}
    </div>
  );
}
 
export default GiphyApp;