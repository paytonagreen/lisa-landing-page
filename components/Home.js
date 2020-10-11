import React from "react";

import HomeStyles from "./styles/HomeStyles";

function Home() {
  return (
    <HomeStyles>
      <div id="showcase">
        <div className="showcase-content">
          <h1>Lisa Alley</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
            veniam debitis eos. Temporibus cumque perspiciatis magnam. Tenetur
            rem magni ab.
          </p>
      <a href="#links">More</a>
        </div>
      </div>
    </HomeStyles>
  );
}

export default Home;
