import LinksStyles from './styles/LinksStyles';

function Links() {
  return (
    <LinksStyles>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, autem.
        </p>
      </div>
    </div>
    </LinksStyles>
  );
}

export default Links;
