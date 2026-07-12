import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [Fetchdata, setFetchdata] = useState("null");

  const [name, setName] = useState("");

  const data = async () => {

    const respoce = await axios.get("http://localhost:3000/");
    console.log(respoce.data);
    setFetchdata(respoce.data)
  }

  useEffect(() => {
    data()
  }, []);

  const submitdata = async (e) => {
    e.preventDefault();
    const notes = await axios.post("http://localhost:3000/", { name: name });
    setName(notes.data)
  }

  return (
    <div>


       {Fetchdata?.data?.map((item, index) => (
        <h2 key={index}>{item.name}</h2>
      ))}

      <form onSubmit={submitdata}>

        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
