import TestimonialListStyles from './styles/TestimonialListStyles';

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
