import { Link } from "react-router-dom";
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
          <a href="">About us</a>
          <a href="">Faq</a>
          <a href="">Blog</a>
          <a href="">Contact us</a>
          <br />
          <h3>Legal</h3>
          <Link to={"/privacy-policy"}>Privacy Policy</Link>
          <Link to={"/terms-of-service"}>Terms of Service</Link>
        </div>
        <div className="links-div">
          CONTACT US <br />
          Email: GippslandSourcing.com
          <br /><br />
          <a
            className="fa-brands fa-whatsapp"
            href="https://wa.me/+8801686356445"
            target="_blank"
          >
            {" "}
            +88 0168 6356 445
          </a>
          <br />
          <div className="social-icon">
            <Link
              to={"https://www.facebook.com"}
              target="_blank"
              className="fa-brands fa-facebook"
            ></Link>
            <Link
              to={"https://www.linkedin.com"}
              target="_blank"
              className="fa-brands fa-linkedin"
            ></Link>
            <Link
              to={"https://www.instagram.com"}
              target="_blank"
              className="fa-brands fa-instagram"
            ></Link>
            <Link
              to={"https://www.tiktok.com"}
              target="_blank"
              className="fa-brands fa-tiktok"
            ></Link>
          </div>
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
