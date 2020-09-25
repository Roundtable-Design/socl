//Import base page from Latest
import Latest from "@page/Latest";
//Import from package.json
import React from "react";
import initGA from "../helpers/initGA";

//Inputing Blog data
export default (props) => {
  React.useEffect(() => {
    initGA(window.location);
  }, []);

  return (
    <Latest
      type="posts"
      title="Read our blog at home or on the go."
      page="Latest Post"
      subheading="Recent posts"
      link="#"
    />
  );
};
