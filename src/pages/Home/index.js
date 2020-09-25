//Import from Hero
import Hero from "./Hero";
//Imports from components
import Intro from "@component/Intro";
//Import from package.json
import React from "react";
import { SignUp } from "@component/Subscribe";
import initGA from "../../helpers/initGA";

//Format of the homepage
export default (props) => {
  React.useEffect(() => {
    initGA(window.location);
  }, []);

  return (
    <div>
      <Hero />
      <Intro />
      <SignUp />
    </div>
  );
};
