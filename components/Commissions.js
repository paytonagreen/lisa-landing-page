import Head from 'next/head';

import CommissionsStyles from './styles/CommissionsStyles';
import CommissionsForm from './CommissionsForm';
import TestimonialList from './TestimonialList';

function Commissions() {
  return (
    <CommissionsStyles id='commissions'>
      <Head>
        <title>Lisa Alley | Commissions</title>
      </Head>
      <a id='home-link' href='/#links'>
        Home
      </a>
      <div className='content'>
        <h1>COMMISSIONS</h1>
        <p>
          I’d love to create a piece that’s perfect for your space. Send me a
          message below about what you are envisioning -- the more information,
          the better.
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
          I’ll follow up with a quote or a request for more information. Thanks
          for reaching out!
        </p>
      </div>
      <CommissionsForm />
    </CommissionsStyles>
  );
}

export default Commissions;
