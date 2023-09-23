const Square = ({
  coordinate,
  isOccupied,
  isAttacked,
  isMissed,
  clickEvent,
  dropHandler,
  dragOverHandler,
}) => {
  return (
    <div
      className="square"
      onClick={clickEvent}
      onDrop={dropHandler}
      onDragOver={dragOverHandler}
      id={coordinate}
    >
      {coordinate}
    </div>
  );
};

export default Square;
