import React from "react";
import { Provider } from "@pulsar-ui/core";
import * as system from "@pulsar-ui/system";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Header from "./header";
import "./style.css";

type LayoutProps = {
  children: React.ReactNode;
};

const Container = styled("div")`
  display: flex;
  justify-content: center;
`;

const Layout = ({ children }: LayoutProps) => (
  <Provider system={system}>
    <Header />
    <Container>
      <main
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column"
        }}
      >
        {children}
      </main>
    </Container>
  </Provider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
