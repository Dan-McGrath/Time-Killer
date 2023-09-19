import PropTypes from "prop-types";

const Card = ({ name, suit, faceUp }) => {
  return faceUp ? (
    <div className="card faceup">
      <p>
        {name} of {suit}
      </p>
    </div>
  ) : (
    <></>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  suit: PropTypes.string,
  faceUp: PropTypes.bool,
};

export default Card;
