import PropTypes from "prop-types";
import Square from "./Square";
const Gameboard = ({ currentPlayer, dragOverHandler, dropHandler }) => {
  let currentPlayerGameboard = currentPlayer.currentGameboard.map((ele) => (
    <Square
      key={ele.coordinate}
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
