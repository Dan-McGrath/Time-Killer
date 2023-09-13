const Button = ({ text, clickHandler, className }) => {
  return (
    <>
      <button onClick={clickHandler} className={className}>{text}</button>
    </>
  );
};

export default Button;
