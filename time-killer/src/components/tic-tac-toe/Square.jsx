import PropTypes from "prop-types";

const Square = ({ index, squareClickHandler, textContent }) => {
  return (
    <div className="square" onClick={squareClickHandler} data-index={index}>
      {textContent}
    </div>
  );
};

Square.propTypes = {
  index: PropTypes.number,
  squareClickHandler: PropTypes.func,
  textContent: PropTypes.string,
};
export default Square;
