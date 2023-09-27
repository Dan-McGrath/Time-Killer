const Square = ({
  coordinate,
  isOccupied,
  isAttacked,
  isMissed,
  clickEvent,
  dropHandler,
  dragOverHandler,
  index,
}) => {
  return (
    <div
      className="square"
      onClick={clickEvent}
      onDrop={dropHandler}
      onDragOver={dragOverHandler}
      id={index}
    >
      {coordinate}
    </div>
  );
};

export default Square;
