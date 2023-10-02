import PropTypes from "prop-types";
const Square = ({
  isOccupied,
  isAttacked,
  dropHandler,
  dragOverHandler,
  index,
  attackHandler,
  isMobile,
  selectSquare,
  gameStart,
}) => {
  if (isMobile && gameStart) {
    if (isAttacked && isOccupied) {
      return (
        <div className="square hit" onClick={attackHandler} id={index}></div>
      );
    } else if (isAttacked && !isOccupied) {
      return (
        <div className="square missed" onClick={attackHandler} id={index}></div>
      );
    } else if (!isAttacked) {
      return <div className="square" onClick={attackHandler} id={index}></div>;
    }
  } else if (isMobile && !gameStart) {
    return <div className="square" onClick={selectSquare} id={index}></div>;
  } else {
    if (isAttacked && isOccupied) {
      return (
        <div
          className="square hit"
          onClick={attackHandler}
          onDrop={dropHandler}
          onDragOver={dragOverHandler}
          id={index}
        ></div>
      );
    } else if (isAttacked && !isOccupied) {
      return (
        <div
          className="square missed"
          onClick={attackHandler}
          onDrop={dropHandler}
          onDragOver={dragOverHandler}
          id={index}
        ></div>
      );
    } else if (!isAttacked) {
      return (
        <div
          className="square"
          onClick={attackHandler}
          onDrop={dropHandler}
          onDragOver={dragOverHandler}
          id={index}
        ></div>
      );
    }
  }
};

Square.propTypes = {
  isMobile: PropTypes.bool,
  isOccupied: PropTypes.bool,
  isAttacked: PropTypes.bool,
  dropHandler: PropTypes.func,
  dragOverHandler: PropTypes.func,
  index: PropTypes.number,
  attackHandler: PropTypes.func,
  selectSquare: PropTypes.func,
  gameStart: PropTypes.bool,
};

export default Square;
