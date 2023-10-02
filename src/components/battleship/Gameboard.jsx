import PropTypes from "prop-types";
import Square from "./Square";
const Gameboard = ({
  currentPlayer,
  dragOverHandler,
  dropHandler,
  attackHandler,
  isMobile,
  touchEndHandler,
  touchMoveHandler,
}) => {
  let currentPlayerGameboard = currentPlayer.board.gameboard.map((ele) => (
    <Square
      key={ele.index}
      index={ele.index}
      isAttacked={ele.isAttacked}
      isOccupied={ele.isOccupied}
      dragOverHandler={dragOverHandler}
      dropHandler={dropHandler}
      attackHandler={attackHandler}
      isMobile={isMobile}
      touchEndHandler={touchEndHandler}
      touchMoveHandler={touchMoveHandler}
    />
  ));

  return <>{currentPlayerGameboard}</>;
};

Gameboard.propTypes = {
  currentPlayer: PropTypes.object,
  dragOverHandler: PropTypes.func,
  dropHandler: PropTypes.func,
  attackHandler: PropTypes.func,
  isMobile: PropTypes.bool,
  touchEndHandler: PropTypes.func,
  touchMoveHandler: PropTypes.func,
};

export default Gameboard;
