import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Blackjack from "./blackjack/Blackjack";
import Memory from "./memoryGame/Memory";
import Ttt from "./tic-tac-toe/TTT";
import Battleship from "./battleship/Battleship";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/Blackjack",
      element: <Blackjack />,
    },
    {
      path: "/Memory",
      element: <Memory />,
    },
    {
      path: "/Tic-Tac-Toe",
      element: <Ttt />,
    },
    {
      path: "/Battleship",
      element: <Battleship />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
