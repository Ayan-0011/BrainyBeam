import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [Fetchdata, setFetchdata] = useState(null);

  const data = async () => {

    const respoce = await axios.get("http://localhost:3000/");
    console.log(respoce.data);
    setFetchdata(respoce.data)
  }

  useEffect(() => {
    data()
  }, []);

  return (
    <div>
          <h1>{Fetchdata?.messgae}</h1>
    </div>
  )
}

export default App
