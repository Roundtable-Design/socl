import { Logo, MenuToggle, MenuWrapper, NavWrapper } from "./styles";

import React from "react";
import SCL from "@asset/scl.svg";
import { useLocation } from "react-router-dom";

export default (props) => {
  const location = useLocation();

  return (
    <React.Fragment>
      <NavWrapper>
        <Logo href="/" className="nav-logo" large={location.pathname === "/"} />
      </NavWrapper>
      <MenuWrapper>
        <MenuToggle className="nav-toggle" />
      </MenuWrapper>
    </React.Fragment>
  );
};
