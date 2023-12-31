import TttGameboard from "./TttGameboard";
import Button from "../Button";
import PropTypes from "prop-types";

const Monitor = ({
  gameboard,
  squareClickHandler,
  choosePlayersHandler,
  aiActive,
}) => {
  return aiActive ? (
    <div className="monitor">
      <TttGameboard
        gameboard={gameboard}
        squareClickHandler={squareClickHandler}
      />
      <div className="side-btns">
        <Button text="2 Player" clickHandler={choosePlayersHandler} />
        <Button
          text="Vs Computer"
          clickHandler={choosePlayersHandler}
          className="btn-active"
        />
      </div>
    </div>
  ) : (
    <div className="monitor">
      <TttGameboard
        gameboard={gameboard}
        squareClickHandler={squareClickHandler}
      />
      <div className="side-btns">
        <Button
          text="2 Player"
          clickHandler={choosePlayersHandler}
          className="btn-active"
        />
        <Button text="Vs Computer" clickHandler={choosePlayersHandler} />
      </div>
    </div>
  );
};

Monitor.propTypes = {
  gameboard: PropTypes.array,
  squareClickHandler: PropTypes.func,
  choosePlayersHandler: PropTypes.func,
  aiActive: PropTypes.bool,
};

export default Monitor;
