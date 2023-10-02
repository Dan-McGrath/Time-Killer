import PropTypes from "prop-types";
const Square = ({
  isOccupied,
  isAttacked,
  dropHandler,
  dragOverHandler,
  index,
  attackHandler,
  isMobile,
  touchEndHandler,
  touchMoveHandler,
}) => {
  if (isMobile) {
    if (isAttacked && isOccupied) {
      return (
        <div
          className="square hit"
          onClick={attackHandler}
          onTouchEnd={touchEndHandler}
          onTouchMove={touchMoveHandler}
          id={index}
        ></div>
      );
    } else if (isAttacked && !isOccupied) {
      return (
        <div
          className="square missed"
          onClick={attackHandler}
          onTouchEnd={dropHandler}
          onTouchMove={dragOverHandler}
          id={index}
        ></div>
      );
    } else if (!isAttacked) {
      return (
        <div
          className="square"
          onClick={attackHandler}
          onTouchEnd={dropHandler}
          onTouchMove={dragOverHandler}
          id={index}
        ></div>
      );
    }
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
  touchEndHandler: PropTypes.func,
  touchMoveHandler: PropTypes.func,
};

export default Square;
