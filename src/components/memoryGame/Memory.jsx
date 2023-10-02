import Header from "../header/Header";
import GameManager from "./MemoryGameManager";
import PropTypes from "prop-types";

const Memory = ({ isMobile, navHandler, clickLinkHandler, navIsOpen }) => {
  return (
    <>
      <Header
        isMobile={isMobile}
        navHandler={navHandler}
        clickLinkHandler={clickLinkHandler}
        navIsOpen={navIsOpen}
      />
      <h1>Memory</h1>

      <GameManager />
    </>
  );
};

Memory.propTypes = {
  isMobile: PropTypes.bool,
  navHandler: PropTypes.func,
  clickLinkHandler: PropTypes.func,
  navIsOpen: PropTypes.bool,
};

export default Memory;
