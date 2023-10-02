import Header from "../header/Header";
import GameSetup from "./GameSetup";
import PropTypes from "prop-types";

const Battleship = ({ isMobile, navHandler, clickLinkHandler, navIsOpen }) => {
  return (
    <>
      <Header
        isMobile={isMobile}
        navHandler={navHandler}
        clickLinkHandler={clickLinkHandler}
        navIsOpen={navIsOpen}
      />
      <h1>BattleShip</h1>
      <GameSetup isMobile={isMobile} />
    </>
  );
};

Battleship.propTypes = {
  isMobile: PropTypes.bool,
  navHandler: PropTypes.func,
  clickLinkHandler: PropTypes.func,
  navIsOpen: PropTypes.bool,
};

export default Battleship;
