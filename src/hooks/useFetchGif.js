import { useState, useEffect } from 'react';

import { getGifs } from '../helpers/getGifs';

const useFetchGif = (category) => {
  const [data, setData] = useState({ 
    data: [],
    loading: true
  });
  useEffect(() => {
    getGifs(category).then(imgs => {
      console.log(data.loading);
      console.log(imgs);
        setData({
          data: imgs,
          loading: false
        });
    });
  }, []);
  return data;
}

export default useFetchGif;
