import PropTypes from "prop-types";
import Square from "./Square";
const Gameboard = ({ currentPlayer, dragOverHandler, dropHandler }) => {
  let currentPlayerGameboard = currentPlayer.board.gameboard.map((ele) => (
    <Square
      key={ele.index}
      index={ele.index}
      coordinate={ele.coordinate}
      isAttacked={ele.isAttacked}
      isOccupied={ele.isOccupied}
      isMissed={ele.isMissed}
      dragOverHandler={dragOverHandler}
      dropHandler={dropHandler}
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
