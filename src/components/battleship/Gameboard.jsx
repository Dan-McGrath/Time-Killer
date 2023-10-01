import PropTypes from "prop-types";
import Square from "./Square";
const Gameboard = ({
  currentPlayer,
  dragOverHandler,
  dropHandler,
  attackHandler,
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
    />
  ));

  return <>{currentPlayerGameboard}</>;
};

Gameboard.propTypes = {
  currentPlayer: PropTypes.object,
  dragOverHandler: PropTypes.func,
  dropHandler: PropTypes.func,
};

export default Gameboard;
