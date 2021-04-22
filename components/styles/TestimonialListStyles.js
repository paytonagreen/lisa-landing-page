import styled from 'styled-components'

const TestimonialListStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  width: 80%;
  img {
    border-radius: 100%;
    max-width: 250px;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;
    p {
      text-align: center;
      width: 100%;
    }
  }
  .img-div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .testimonial {
    padding: 2rem;
    border-radius: 5px;
    background-color: ${(props) => props.theme.lavender};
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 4fr;
    margin: 2rem;
  }
  .left {
    grid-template-columns: 1fr 4fr;
  }
  .right {
    background: ${props => props.theme.offwhite};
    grid-template-columns: 4fr 1fr;
  }
`;


export default TestimonialListStyles;