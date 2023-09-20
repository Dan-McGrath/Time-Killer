import PropTypes from "prop-types";

const Card = ({ name }) => {
  return (
    <div className="card faceup">
      <p>{name}</p>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  faceUp: PropTypes.bool,
};

export default Card;
