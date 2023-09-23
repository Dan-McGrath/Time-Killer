const Square = ({
  coordinate,
  isOccupied,
  isAttacked,
  isMissed,
  clickEvent,
}) => {
  return (
    <div className="square" clickEvent={clickEvent}>
      {coordinate}
    </div>
  );
};

export default Square;
