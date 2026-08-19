import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/gippsland_sourcing_no_bg.png";
import menuIcon from "../../assets/menu-icon.svg";
import "./NavBar.css";

const NavBar = () => {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
    // console.log(navRef);
  };

  return (
    <>
      <img
        src={menuIcon}
        alt="menuIcon"
        className="menuIcon"
        onClick={() => showNavBar()}
      />

      <div className="nav-main" ref={navRef}>
        <Link to={"/"}>
          {" "}
          <img src={logo} alt="logo" />
        </Link>

        <div className="link-div">
          <ul>
            <li className="dropdown">
              {" "}
              <a href="#">
                Our Services <i className="fa-solid fa-circle-chevron-down"></i>
              </a>
              <div className="dropdown-content">
                <a href="#">Our Services Link 1</a>
                <a href="#">Our Services Link 2</a>
                <a href="#">Our Services Link 3</a>
              </div>
            </li>
            <li className="dropdown">
              {" "}
              <a href="#">
                Solutions <i className="fa-solid fa-circle-chevron-down"></i>
              </a>
              <div className="dropdown-content">
                <a href="#">Solutions Link 1</a>
                <a href="#">Solutions Link 2</a>
                <a href="#">Solutions Link 3</a>
              </div>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li className="dropdown">
              {" "}
              <a href="#">
                About <i className="fa-solid fa-circle-chevron-down"></i>
              </a>
              <div className="dropdown-content">
                <a href="#">About Link 1</a>
                <a href="#">About Link 2</a>
                <a href="#">About Link 3</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#">
                Resources <i className="fa-solid fa-circle-chevron-down"></i>
              </a>
              <div className="dropdown-content">
                <a href="#">Resources Link 1</a>
                <a href="#">Resources Link 2</a>
                <a href="#">Resources Link 3</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
