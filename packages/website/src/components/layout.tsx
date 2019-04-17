/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import { Provider } from "@pulsar-ui/core";
import * as system from "@pulsar-ui/system";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Header from "./header";
import "./layout.css";

type LayoutProps = {
  children: React.ReactNode;
};

const Container = styled("div")`
  display: grid;
  justify-content: center;
`;

const Layout = ({ children }: LayoutProps) => (
  <Provider system={system}>
    <Header />
    <Container>
      <main>{children}</main>
    </Container>
  </Provider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
