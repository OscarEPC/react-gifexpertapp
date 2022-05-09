import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [value, setValue] = useState("");
  const handleInputChange = (e) => {
    setValue(e.target.value);
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length > 2) {
      setCategories(categories => [value, ...categories]);
      setValue("");
    }
  }
  return (
    <form onSubmit={ handleOnSubmit }>
      <h2>AddCategory</h2>
      <input 
        type="text" 
        value={ value }
        onChange={ handleInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
