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
        <Link to="/Blackjack" className="game blackjack">
          Blackjack
        </Link>

        <Link to="/Memory" className="game memory">
          Memory
        </Link>

        <Link to="/Tic-Tac-Toe" className="game tic-tac-toe">
          Tic Tac Toe
        </Link>

        <Link to="/Battleship" className="game battleship">
          Battleship
        </Link>
      </div>
    </section>
  );
};

export default Hero;
