import { Link } from "gatsby";
import React from "react";
import { Toolbar, ToolbarContent, ToolbarItem } from "@pulsar-ui/core";
import styled from "@emotion/styled";
import Logo from "../../../../assets/logo.svg";

const StyledToolbar = styled(Toolbar)`
  margin-bottom: 3rem;
`;

const StyledImage = styled("img")`
  vertical-align: middle;
`;

const Header = () => (
  <StyledToolbar system={{ palette: "white" }}>
    <ToolbarContent>
      <ToolbarItem>
        <Link to="/">
          <StyledImage alt="Pulsar UI" src={Logo} width={40} />
        </Link>
      </ToolbarItem>
      <ToolbarItem>
        <Link to="/components">Components</Link>
      </ToolbarItem>
    </ToolbarContent>
  </StyledToolbar>
);

export default Header;
