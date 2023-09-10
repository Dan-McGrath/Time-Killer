import PropTypes from "prop-types";

const Square = ({ index, clickHandler }) => {
  return (
    <div className="square" onClick={clickHandler} data-index={index}></div>
  );
};

Square.propTypes = {
  index: PropTypes.number,
  clickHandler: PropTypes.func,
};
export default Square;
