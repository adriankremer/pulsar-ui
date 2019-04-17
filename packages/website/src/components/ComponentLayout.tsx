/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Grid, GridCell, Provider } from "@pulsar-ui/core";
import * as system from "@pulsar-ui/system";
import styled from "@emotion/styled";
import Header from "./header";
import "./style.css";
import { Sidebar } from "./Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

export const Container = styled("div")`
  max-width: 1200px;
`;

export const ComponentLayout = ({ children }: LayoutProps) => {
  const {
    allMarkdownRemark: { edges }
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                path
              }
            }
          }
        }
      }
    `
  );
  return (
    <Provider system={system}>
      <Header />
      <Container>
        <Grid>
          <GridCell system={{ cellWidth: [12, 3] }}>
            <Sidebar items={edges} />
          </GridCell>
          <GridCell system={{ cellWidth: [12, 9] }}>{children}</GridCell>
        </Grid>
      </Container>
    </Provider>
  );
};
