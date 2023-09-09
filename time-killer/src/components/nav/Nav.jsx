import { Link } from "react-router-dom";

const Nav = ({ clickLinkHandler }) => {
  return (
    <>
      <nav>
        <ul>
          <li onClick={clickLinkHandler}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={clickLinkHandler}>
            <Link to="/Blackjack">Blackjack</Link>
          </li>
          <li onClick={clickLinkHandler}>
            <Link to="/Memory">Memory</Link>
          </li>
          <li onClick={clickLinkHandler}>
            <Link to="/Tic-Tac-Toe">Tic Tac Toe</Link>
          </li>
          <li onClick={clickLinkHandler}>
            <Link to="/Battleship">Battleship</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
