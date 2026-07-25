import "./Card.css";

const Card = ({ vas }) => {
  const { name, info, imgSrc } = vas;
  return (
    <div className="card">
      <img src={imgSrc} alt="imgSrx"  />
      <h1>{name}</h1>
      {/* <p className="price">$19.99</p> */}
      <p>{info}</p>
      <p>{/* <button>Add to Cart</button> */}</p>
    </div>
  );
};

export default Card;
