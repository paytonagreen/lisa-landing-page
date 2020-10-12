import React from 'react';
import CommissionsStyles from './styles/CommissionsStyles'

function Commissions() {
  return (
    <CommissionsStyles id="commissions">
      <a id="home-link" href="/links">Home</a>
      <div className="content">
      <h1>COMMISSIONS</h1>
      <p>
        I’d love to create a piece that’s perfect for your space. Send me an
        e-mail at <a href="mailto:lisadianealley@gmail.com">lisadianealley@gmail.com</a> with what you are envisioning -- the more information, the
        better.
      </p>
      <p>Things you could include in your initial message:</p>
      <ul>
        <li>Dimensions;</li>
        <li>Color Palette;</li>
        <li>Textiles from the room you are designing;</li>
        <li>Previous paintings of mine, if you’d like something similar;</li>
        <li>Reference photographs;</li>
        <li>Ideal deadline</li>
      </ul>
      <p>
        I’ll get into contact ASAP with a response and quote. Thanks so much for
        reaching out!
      </p>
      </div>
    </CommissionsStyles>
  );
}

export default Commissions;
