import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="hero">
      <div className="title">
        <h1>Welcome to Time Killer!</h1>
        <img src="" alt="" />
        <p>
          Select a game from the navigation above or select one of the options
          below, and kill some time playing these quick and easy games!
        </p>
      </div>
      <div className="game-selections">
        <div className="blackjack">
          <Link to="/Blackjack">Blackjack</Link>
        </div>
        <div className="memory">
          <Link to="/Memory">Memory</Link>
        </div>
        <div className="tic-tac-toe">
          <Link to="/Tic-Tac-Toe">Tic Tac Toe</Link>
        </div>
        <div className="battleship">
          <Link to="/Battleship">Battleship</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
