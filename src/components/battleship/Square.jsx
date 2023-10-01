const Square = ({
  coordinate,
  isOccupied,
  isAttacked,
  isMissed,
  clickEvent,
  dropHandler,
  dragOverHandler,
  index,
  attackHandler,
}) => {
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
};

export default Square;
