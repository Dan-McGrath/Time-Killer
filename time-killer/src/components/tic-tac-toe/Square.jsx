const Square = ({ index, clickHandler }) => {
  return (
    <div className="square" onClick={clickHandler} data-index={index}></div>
  );
};

export default Square;
