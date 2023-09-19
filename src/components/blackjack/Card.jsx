import PropTypes from "prop-types";

const Card = ({ name, suit }) => {
  return (
    <>
      <p className="card faceup">
        {name} of {suit}
      </p>
    </>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  suit: PropTypes.string,
};

export default Card;
