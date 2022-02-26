import React from "react";

function Image({ title, imageURL, size, key, setLightBox }) {
  return (
    <div className={`image-parent ${size}`} key={key}>
      <img className={`image`} src={imageURL} alt={title} />
      <div
        className="image-overlay-container"
        onClick={() => setLightBox(imageURL)}
      >
        <div className="image-overlay"></div>
        <p className="image-title">{title}</p>
      </div>
    </div>
  );
}

export default Image;
