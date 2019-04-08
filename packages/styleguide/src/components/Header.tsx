import React from "react";
import Toolbar from "@pulsar-ui/core/Toolbar";
import { NavLink } from "react-router-dom";
import { StyleguideConsumer } from "../containers/StyleguideContext";
import Logo from "../../../../assets/logo.svg";

const Header = () => {
  return (
    <Toolbar gutter="8px 20px">
      <Toolbar.Content>
        <Toolbar.Item use={NavLink} to="/">
          <img width="50" alt="" src={Logo} />
        </Toolbar.Item>
        <StyleguideConsumer>
          {({ styleguidist }: { styleguidist: any }) =>
            styleguidist.sections.map((section: any) => (
              <Toolbar.Item
                use={NavLink}
                key={section.slug}
                to={`/${section.slug}`}
              >
                {section.name}
              </Toolbar.Item>
            ))
          }
        </StyleguideConsumer>
      </Toolbar.Content>
    </Toolbar>
  );
};

export default Header;
