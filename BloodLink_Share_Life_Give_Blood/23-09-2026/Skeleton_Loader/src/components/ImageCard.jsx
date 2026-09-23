import { useState } from "react";

const ImageCard = ({ item }) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div className="image-card">
      <div className="image-wrapper">
        {imageLoading && <div className="skeleton-image"></div>}

        <img
          src={item.download_url}
          alt={item.author}
          className={imageLoading ? "image hidden" : "image"}
          onLoad={() => setImageLoading(false)}
        />
      </div>

      <div className="card-content">
        {imageLoading ? (
          <>
            <div className="skeleton-title"></div>
            <div className="skeleton-text"></div>
          </>
        ) : (
          <>
            <h3>{item.author}</h3>
            <p>Beautiful random image</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
