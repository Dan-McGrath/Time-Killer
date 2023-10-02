import Header from "./header/Header";
import Hero from "./home/hero";
import Contact from "./home/Contact";
import PropTypes from "prop-types";

const App = ({ isMobile, navHandler, clickLinkHandler, navIsOpen }) => {
  return (
    <>
      <Header
        isMobile={isMobile}
        navHandler={navHandler}
        clickLinkHandler={clickLinkHandler}
        navIsOpen={navIsOpen}
      />
      <Hero />
      <Contact />
    </>
  );
};

App.propTypes = {
  isMobile: PropTypes.bool,
  navHandler: PropTypes.func,
  clickLinkHandler: PropTypes.func,
  navIsOpen: PropTypes.bool,
};

export default App;
