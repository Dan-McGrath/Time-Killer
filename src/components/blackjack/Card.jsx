import PropTypes from "prop-types";

const Card = ({ name, faceUp }) => {
  return faceUp ? (
    <div className="bj-card faceup">
      <p>{name}</p>
    </div>
  ) : (
    <>
      <div className="bj-facedown"></div>
    </>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  faceUp: PropTypes.bool,
};

export default Card;
