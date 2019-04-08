import React from "react";
import styled from "@pulsar-ui/core/styled";
import CoreLayout from "../layout/CoreLayout";
import Logo from "../../../../assets/logo.svg";

const Wrapper = styled("div")`
  display: grid;
  place-items: center;
  margin: 100px 0;
`;

const Home = () => {
  return (
    <CoreLayout>
      <Wrapper>
        <img alt="" src={Logo} />
        <h1>Pulsar UI</h1>
      </Wrapper>
    </CoreLayout>
  );
};

export default Home;
