import { useRef, useState } from "react";
import logo from "../../assets/gippsland_sourcing_no_bg.png";
import menuIcon from "../../assets/menu-icon.svg";
import "./NavBar.css";
const NavBar = () => {
  const [isDrop, setIsDrop] = useState(null);
  const navRef = useRef();
  const downArrow = "\u25BC";
  const upArrow = "\u25B2";
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
    // console.log(navRef);
  };
  const toggleMenu = (menu) => {
    setIsDrop(isDrop === menu ? null : menu);
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
        <img src={logo} alt="logo" />

        <div className="link-div">
          <ul>
            <li className="dropdown">
              {" "}
              <a href="#" onClick={() => toggleMenu("our-services")}>
                Our Services {isDrop === "our-services" ? upArrow : downArrow}
              </a>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
            <li className="dropdown">
              {" "}
              <a href="#" onClick={() => toggleMenu("solutions")}>
                Solutions {isDrop === "solutions" ? upArrow : downArrow}
              </a>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li className="dropdown">
              {" "}
              <a href="#" onClick={() => toggleMenu("about")}>
                About {isDrop === "about" ? upArrow : downArrow}
              </a>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#" onClick={() => toggleMenu("resources")}>
                Resources {isDrop === "resources" ? upArrow : downArrow}
              </a>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
