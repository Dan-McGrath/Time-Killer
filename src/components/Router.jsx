import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import App from "./App";
import Blackjack from "./blackjack/Blackjack";
import Memory from "./memoryGame/Memory";
import Ttt from "./tic-tac-toe/Ttt";
import Battleship from "./battleship/Battleship";

const Router = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimension(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;

  const navHandler = () => {
    setNavIsOpen(!navIsOpen);
  };

  const clickLinkHandler = () => {
    setNavIsOpen(false);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <App
          isMobile={isMobile}
          navHandler={navHandler}
          clickLinkHandler={clickLinkHandler}
          navIsOpen={navIsOpen}
        />
      ),
    },
    {
      path: "/Blackjack",
      element: (
        <Blackjack
          isMobile={isMobile}
          navHandler={navHandler}
          clickLinkHandler={clickLinkHandler}
          navIsOpen={navIsOpen}
        />
      ),
    },
    {
      path: "/Memory",
      element: (
        <Memory
          isMobile={isMobile}
          navHandler={navHandler}
          clickLinkHandler={clickLinkHandler}
          navIsOpen={navIsOpen}
        />
      ),
    },
    {
      path: "/Tic-Tac-Toe",
      element: (
        <Ttt
          isMobile={isMobile}
          navHandler={navHandler}
          clickLinkHandler={clickLinkHandler}
          navIsOpen={navIsOpen}
        />
      ),
    },
    {
      path: "/Battleship",
      element: (
        <Battleship
          isMobile={isMobile}
          navHandler={navHandler}
          clickLinkHandler={clickLinkHandler}
          navIsOpen={navIsOpen}
        />
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
