import Header from "../header/Header";
import TttGameboard from "./TttGameboard";
import "../../styles/ttt.scss";
import "../../styles/reset.scss";

const Ttt = () => {
  return (
    <>
      <Header />
      <h1>Tic Tac Toe</h1>
      <TttGameboard />
    </>
  );
};

export default Ttt;
