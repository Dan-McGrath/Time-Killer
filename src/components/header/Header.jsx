import PropTypes from "prop-types";
import Nav from "../nav/Nav";
import logo from "../../assets/images/logo.svg";

const Header = ({ isMobile, navHandler, clickLinkHandler, navIsOpen }) => {
  return isMobile ? (
    navIsOpen ? (
      <header className="nav-mobile">
        <div className="hamburger">
          <div className="close-icon" onClick={navHandler}>
            <p className="sr-only">Close</p>
            <i className="fa-solid fa-x"></i>
          </div>
        </div>
        <Nav clickLinkHandler={clickLinkHandler} />
      </header>
    ) : (
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="hamburger">
          <div className="open-icon" onClick={navHandler}>
            <p className="sr-only">Menu</p>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </header>
    )
  ) : (
    <header>
      <img src={logo} alt="logo" />
      <Nav />
    </header>
  );
};

Header.propTypes = {
  isMobile: PropTypes.bool,
  navHandler: PropTypes.func,
  clickLinkHandler: PropTypes.func,
  navIsOpen: PropTypes.bool,
};

export default Header;
