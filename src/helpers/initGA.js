import ReactGA from "react-ga";

// Expects window.location
export default ({ pathname, search }) => {
  ReactGA.initialize("UA-179023589-1");
  ReactGA.pageview(pathname + search);
};
