import PropTypes from "prop-types";
import Square from "./Square";
const Gameboard = ({ currentPlayer }) => {
  let currentPlayerGameboard = currentPlayer.currentGameboard.map((ele) => (
    <Square
      key={ele.coordinate}
      coordinate={ele.coordinate}
      isAttacked={ele.isAttacked}
      isOccupied={ele.isOccupied}
      isMissed={ele.isMissed}
    />
  ));

  return <>{currentPlayerGameboard}</>;
};

Gameboard.proptypes = {
  currentPlayer: PropTypes.object,
};

export default Gameboard;
