import { useRef } from "react";
import logo from "../../assets/gippsland_sourcing_no_bg.png";
import menuIcon from "../../assets/menu-icon.svg";
import "./NavBar.css";
const NavBar = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
    console.log(navRef);
  };
  return (
    <>
      <div>
        <img
          src={menuIcon}
          alt="menuIcon"
          className="menuIcon"
          onClick={() => showNavBar()}
        />

        {/* <div className="nav-side">
          <img src={logo} alt="logo" />

          <div className="link-div">
            <a href="">option 1</a>
            <a href="">option 2</a>
            <a href="">option 3</a>
            <a href="">option 4</a>
            <a href="">option 5</a>
          </div>
        </div> */}
      </div>

      <div className="nav-main" ref={navRef}>
        <img src={logo} alt="logo" />

        <div className="link-div">
          <a href="">option 1</a>
          <a href="">option 2</a>
          <a href="">option 3</a>
          <a href="">option 4</a>
          <a href="">option 5</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
