import React from "react";

import HomeStyles from "./styles/HomeStyles";

function Home() {
  return (
    <HomeStyles>
      <div className="showcase">
        <div className="showcase-content">
          <h1>Sup I'm Lisa</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
            veniam debitis eos. Temporibus cumque perspiciatis magnam. Tenetur
            rem magni ab.
          </p>
        </div>
      </div>
      <div className="links">
        <div className="link">
          <h2>About</h2>
          <div className="line" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            commodi!
          </p>
        </div>
        <div className="link">
          <h2>Commissions</h2>
          <div className="line" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            iusto.
          </p>
        </div>
        <div className="link">
          <h2>Store</h2>
          <div className="line" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            autem.
          </p>
        </div>
      </div>
    </HomeStyles>
  );
}

export default Home;
