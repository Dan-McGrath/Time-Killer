import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Nav from "../nav/Nav";

const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimension(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;

  const navHandler = () => {
    setNavIsOpen(!navIsOpen);
  };

  const clickLinkHandler = () => {
    setNavIsOpen(false);
  };

  return isMobile ? (
    navIsOpen ? (
      <header>
        <Nav clickLinkHandler={clickLinkHandler} />
        <div className="hamburger">
          <div className="close-icon" onClick={navHandler}>
            <p className="sr-only">Close</p>
            <i className="fa-solid fa-x"></i>
          </div>
        </div>
      </header>
    ) : (
      <header>
        <div className="logo">
          <img src="" alt="logo" />
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
      <img src="" alt="logo" />
      <Nav />
    </header>
  );
};

Header.propTypes = {
  isMobile: PropTypes.bool,
};

export default Header;
