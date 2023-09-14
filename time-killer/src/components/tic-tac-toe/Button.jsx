import PropTypes from "prop-types";

const Button = ({ text, clickHandler, className }) => {
  return (
    <>
      <button onClick={clickHandler} className={className}>
        {text}
      </button>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  clickHandler: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
