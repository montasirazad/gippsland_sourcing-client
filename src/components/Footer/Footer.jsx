import logo from "../../assets/gippsland_sourcing_no_bg.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-main">
      <h1>Ready to import from China?</h1>
      <div className="footer-link">
        <div className="links-div">
          <img src={logo} alt="" />
        </div>
        <div className="links-div">
          <a href="">option 1</a>
          <a href="">option 2</a>
          <a href="">option 3</a>
          <a href="">option 4</a>
          <a href="">option 5</a>
        </div>
        <div className="links-div">
          <a href="">option 1</a>
          <a href="">option 2</a>
          <a href="">option 3</a>
          <a href="">option 4</a>
          <a href="">option 5</a>
        </div>
        <div className="links-div">
          CONTACT US <br />
          Email: GippslandSourcing.com
          <br />
          <a href="tel:+8801686356445">+88 0168 6356 445</a>
        </div>
      </div>{" "}
      <br />
      <hr />
      <div className="footer-copyright">
        <p>
          Copyright 2026 | All Rights Reserved | Powered by Gippsland Sourcing
        </p>
      </div>
    </div>
  );
};

export default Footer;
