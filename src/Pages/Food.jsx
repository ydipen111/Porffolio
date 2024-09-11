import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { categoryUrl } from '../Data/url.js';
import { Product } from '../Components/Product.jsx';

export default function Food() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(categoryUrl);
      console.log(response.data);
      setData(response.data)

    } catch (error) {

    }
  }
  useEffect(() => {
    getData();
  }, [])


  return (<div>

    {
      data && <Product categoires={data.categoires} />
    }

  </div>
  )
}
