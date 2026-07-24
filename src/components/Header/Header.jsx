import bannerImg from "../../assets/p_1.jpg";
import "./Header.css";
const Header = () => {
  return (
    <div className="mdiv">
      <div>
        <img src={bannerImg} alt="bannerImg" />
      </div>
      <div className="mdiv-txt">
        <h1>Lorem, ipsum dolor.</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          providen
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          providen
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          providen
        </p>
        <br /><br />
        <button className="button-63" role="button">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Header;
