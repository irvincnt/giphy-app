import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
  const [inputValue, setinputValue] = useState('');

  const onChangeInputValue = (e) => {
    setinputValue(e.target.value)
  }

  const onSubmitInputValue = (e) => {
    e.preventDefault()

    setCategories(categories => [...categories, inputValue])
  }

  return (
    <form onSubmit={onSubmitInputValue}> 
      <input 
        type='text'
        value={inputValue}
        onChange={onChangeInputValue}
        />
    </form>
  );
}
 
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}


export default AddCategory;