import React from 'react';
import styled from 'styled-components';

const CommissionsStyles = styled.div`
  background: ${props => props.theme.lightblue};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  .content {
    margin: 0 10rem;
    @media (max-width: 700px) {
    margin: 0 3rem 0 3rem;
  }
  }
  h1 {
    color: ${(props) => props.theme.teal};
    text-align: center;
    margin: 0;
    font-size: 4rem;
  }
  p {
    margin: .75rem;
    font-size: 2rem;
  }
  ul {
    padding-left: 3rem;
    margin: 1rem;
  }
  li {
    list-style: square;
    padding-left: 0;
    font-size: 2rem;
  }
  a {
    display: inline-block;
    position: relative;
    text-align: center;
    padding: 2rem;
    top: -10rem;
    left: -40rem;
    background: ${props => props.theme.lavender};
    border-radius: 100%;
    border: none;
    font-size: 2rem;
    &:hover {
      background: ${props => props.theme.yellow}
    }
    @media(max-width: 700px) {
      top: -.5rem;
      left: -12rem;
    }
    transition: all 1s;
  }
  
`;

function Commissions() {
  return (
    <CommissionsStyles id="commissions">
      <a href="#links">Home</a>
      <h1>COMMISSIONS</h1>
      <div className="content">
      <p>
        I’d love to create a piece that’s perfect for your space. Send me an
        e-mail below with what you are envisioning -- the more information, the
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
