import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GidGrif } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Push"]);
  //const addHandle = () => {
    //setCategories(categories => ["HunterXHunter", ...categories]);
  //}
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories } />
      <hr />
      { /* <button onClick={ addHandle }>Add</button> */}
      <ol>
        { categories.map(category => <GidGrif key={ category } category={ category } /> ) }
      </ol>
    </>
  )
}
