import Header from "../header/Header";
import GameManager from "./GameManager";
import PropTypes from "prop-types";

const Blackjack = ({ isMobile, navHandler, clickLinkHandler, navIsOpen }) => {
  return (
    <>
      <Header
        isMobile={isMobile}
        navHandler={navHandler}
        clickLinkHandler={clickLinkHandler}
        navIsOpen={navIsOpen}
      />
      <h1>BlackJack</h1>
      <GameManager />
    </>
  );
};

Blackjack.propTypes = {
  isMobile: PropTypes.bool,
  navHandler: PropTypes.func,
  clickLinkHandler: PropTypes.func,
  navIsOpen: PropTypes.bool,
};

export default Blackjack;
