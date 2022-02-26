import React from "react";

function LightBox({ image, setLightBox }) {
  return (
    <div className="lightbox-container" onClick={() => setLightBox("")}>
      <img src={image} className="lightbox-image" alt={image} />
    </div>
  );
}

export default LightBox;
