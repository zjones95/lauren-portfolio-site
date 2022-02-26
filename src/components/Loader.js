import React from "react";

function Loader() {
  return (
    <div className="loader">
      <div className="lds-heart">
        <div></div>
      </div>
      <div className="loader-text">Loading...</div>
    </div>
  );
}

export default Loader;
