import Header from "../header/Header";
import GameManager from "./Gamemanager";
import "../../styles/ttt.scss";
import "../../styles/reset.scss";

const Ttt = () => {
  return (
    <>
      <Header />
      <h1>Tic Tac Toe</h1>
      <GameManager />
    </>
  );
};

export default Ttt;
