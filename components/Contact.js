import React from 'react';
import Head from 'next/head';
import ContactStyles from './styles/ContactStyles';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Lisa Alley</title>
      </Head>
      <ContactStyles id="contact">
        <a id="home-link" href="#links">Home</a>
        <div className="content">
          <p>Email:</p> 
          <p><a href="mailto:lisadianealley@gmail.com">lisadianealley@gmail.com</a></p>
          <p>Instagram:</p>
          <p><a href="https://instagram.com/lalley">@lalley</a></p>
        </div>
        F
      </ContactStyles>
    </>
  );
};

export default Contact;
