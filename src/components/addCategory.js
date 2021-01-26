import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
  const [inputValue, setinputValue] = useState('');

  const onChangeInputValue = (e) => {
    setinputValue(e.target.value)
  }

  const onSubmitInputValue = (e) => {
    e.preventDefault()

    if (inputValue.length > 2) {
      setCategories(categories => [inputValue, ...categories])
      setinputValue('')
    }
  }

  return (
    <form onSubmit={onSubmitInputValue}>
      <p>{inputValue}</p>
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