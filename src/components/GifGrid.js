import React from 'react';

import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';
import useFetchGif from '../hooks/useFetchGif';

export const GidGrif = ({ category }) => {
  //console.log(category);
  //const [images, setImages] = useState([]);
  //useEffect(() => {
    //getGifs(category).then(setImages);
  //}, []);
  const { data:images, loading } = useFetchGif(category);
  console.log(loading);
  return (
    <>
      <h2>{ category }</h2>
      <div className="card-grid animate_animated animate__fadeIn">
        { images.map(image => <GifGridItem key={image.id} {...image }/>) }
      </div>
      <h2>{ loading ? <p>Loading...</p> : <p>Data loaded</p> }</h2>
    </>
  )
}
