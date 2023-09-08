import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ isMobile }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  //   const navHandler = () => {
  //     setNavIsOpen(!navIsOpen);
  //   };

  //   const clickLinkHandler = () => {
  //     setNavIsOpen(false);
  //   };

  return (
    <>
      <header>
        <div className="logo">
          <img src="" alt="logo" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="Blackjack">Blackjack</Link>
            </li>
            <li>
              <Link to="Memory">Memory</Link>
            </li>
            <li>
              <Link to="Tic-Tac-Toe">Tic Tac Toe</Link>
            </li>
            <li>
              <Link to="Battleship">Battleship</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

Header.propTypes = {
  isMobile: PropTypes.bool,
};

export default Header;
