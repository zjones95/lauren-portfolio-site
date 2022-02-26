import React, { useState } from "react";

import Image from "./Image";
import Loader from "./Loader";

import LightBox from "./LightBox";

function Home({ data }) {
  const [lightBox, setLightBox] = useState("");

  return (
    <div>
      {lightBox && <LightBox setLightBox={setLightBox} image={lightBox} />}
      <div className="home-container container">
        {!data ? (
          <Loader />
        ) : (
          data.map((item, i) => {
            if (item.ImageType === "drawings") {
              return null;
            }

            return (
              <Image
                title={item.Title}
                size={item.ImageSize}
                imageURL={item.Image[0].url}
                key={i}
                setLightBox={setLightBox}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Home;
