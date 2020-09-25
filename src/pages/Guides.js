//Import base page from latest
import Latest from "@page/Latest";
//Import from package.json
import React from "react";
import initGA from "../helpers/initGA";

//Crafting the guides page
export default (props) => {
  React.useEffect(() => {
    initGA(window.location);
  }, []);

  return (
    <Latest
      type="guides"
      title="Here you can find some of our guides."
      page="Latest Guide"
      subheading="More guides"
    />
  );
};
