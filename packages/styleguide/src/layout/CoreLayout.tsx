import React from "react";
import { styled } from "@pulsar-ui/core";
import Box, { BoxProps } from "@pulsar-ui/core/src/Box";
import Header from "../components/Header";

interface Container extends BoxProps {}

const Container = styled(Box)<Container>``;

interface CoreLayoutProps {
  children?: any;
}

const CoreLayout = (props: CoreLayoutProps) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default CoreLayout;
