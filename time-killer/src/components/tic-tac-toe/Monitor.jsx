import TttGameboard from "./TttGameboard";
import Button from "./Button";

const Monitor = ({
  gameboard,
  squareClickHandler,
  choosePlayersHandler,
  aiActive,
}) => {
  return aiActive ? (
    <>
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
    </>
  ) : (
    <>
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
    </>
  );
};

export default Monitor;
