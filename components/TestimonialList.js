import styled from 'styled-components';

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

function TestimonialList() {
  return (
    <TestimonialListStyles>
      <div className="testimonial left">
        <div className="img-div">
          <img
            src="https://www.freedigitalphotos.net/images/category-images/118.jpg"
            alt=""
          />
        </div>
        <div className="content">
          <p>
            Sup I love Lisa's paintings they're v good tbh. She painted a
            painting for me very fast and it was large and good.
          </p>
          <p>--Steve, Hell</p>
        </div>
      </div>
      <div className="testimonial right">
        <div className="content">
          <p>
            I know I look very upset but the only time I've smiled all year was
            when Lisa painted me a painting it was a very good painting.
          </p>
          <p>--Stephanie, Schenedtady</p>
        </div>
        <div className="img-div">
          <img src="https://i.imgur.com/VTKI5Gj.jpg" alt="" />
        </div>
      </div>
    </TestimonialListStyles>
  );
}

export default TestimonialList;
