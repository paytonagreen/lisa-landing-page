import HomeStyles from './styles/HomeStyles';

function Home() {
  return (
    <HomeStyles>
      <div id='showcase'>
        <div className='showcase-content'>
          <h1>Lisa Alley</h1>
          <p>
            Original artwork and prints by Lisa Alley out of Austin, TX. All
            Rights Reserved.
          </p>
          <a href='#links'>More</a>
        </div>
      </div>
    </HomeStyles>
  );
}

export default Home;
