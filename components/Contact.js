import React from 'react';
import ContactStyles from './styles/ContactStyles';
import Head from 'next/head';

const Contact = () => {
  return (
    <>
      <ContactStyles id="contact">
        <Head>
          <title>Lisa Alley | Contact</title>
        </Head>
        <a id="home-link" href="/#links">
          Home
        </a>
        <div className="content">
          <p>Email:</p>
          <p>
            <a href="mailto:lisadianealley@gmail.com">
              lisadianealley@gmail.com
            </a>
          </p>
          <p>Instagram:</p>
          <p>
            <a href="https://instagram.com/lalley">@lalley</a>
          </p>
        </div>
      </ContactStyles>
    </>
  );
};

export default Contact;
