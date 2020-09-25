//Imports from calendar
import Events from "./Events";
import Overview from "./Overview";
//Imports from package.json
import React from "react";
import initGA from "../../helpers/initGA";

export default (props) => {
  React.useEffect(() => {
    initGA(window.location);
  }, []);

  return (
    <div>
      <Overview />
      <Events />
    </div>
  );
};
