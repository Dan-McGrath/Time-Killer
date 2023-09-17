import PropTypes from "prop-types";
const Message = ({ message }) => {
  return (
    <div className="message">
      <p>{message}</p>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.string,
};

export default Message;
