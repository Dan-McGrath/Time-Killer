import PropTypes from "prop-types";
import Square from "./Square";
const TttGameboard = ({ gameboard, squareClickHandler }) => {
  return (
    <div className="ttt-gameboard">
      {gameboard.map((ele) => (
        <Square
          key={ele.index}
          squareClickHandler={squareClickHandler}
          index={ele.index}
          textContent={ele.content}
        />
      ))}
    </div>
  );
};
TttGameboard.propTypes = {
  gameboard: PropTypes.array,
  squareClickHandler: PropTypes.func,
};

export default TttGameboard;
