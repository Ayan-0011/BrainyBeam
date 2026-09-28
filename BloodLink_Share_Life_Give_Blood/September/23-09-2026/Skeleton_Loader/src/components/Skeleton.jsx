import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Skeleton.css";
import ImageCard from "./ImageCard";



const Skeleton = () => {
  const [data, setData] = useState([]);

  const handleData = async () => {
    try {
      const res = await axios.get( "https://picsum.photos/v2/list?page=1&limit=6" );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    
  }, []);

  return (
    <div className="app">

      <header className="header">
        <div className="header-content">
          <h1>Image Gallery</h1>

          <button onClick={handleData}>
            Search
          </button>
        </div>
      </header>

      <main className="container">

        <div className="gallery">
          {data.map((item) => (
            <ImageCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

      </main>

    </div>
  );
};

export default Skeleton;