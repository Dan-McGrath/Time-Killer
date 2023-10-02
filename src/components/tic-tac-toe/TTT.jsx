import Header from "../header/Header";
import GameManager from "./Gamemanager";
import PropTypes from "prop-types";

const Ttt = ({ isMobile, navHandler, clickLinkHandler, navIsOpen }) => {
  return (
    <>
      <Header
        isMobile={isMobile}
        navHandler={navHandler}
        clickLinkHandler={clickLinkHandler}
        navIsOpen={navIsOpen}
      />
      <h1>Tic Tac Toe</h1>
      <GameManager />
    </>
  );
};

Ttt.propTypes = {
  isMobile: PropTypes.bool,
  navHandler: PropTypes.func,
  clickLinkHandler: PropTypes.func,
  navIsOpen: PropTypes.bool,
};

export default Ttt;
