import React from "react";
import { Avatar } from "@pulsar-ui/core";
import { css } from "@emotion/core";
import Image from "../components/image";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ width: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p style={{ width: "500px", textAlign: "center" }}>
      This UI library is somewhat different because it seperates components and
      styles. These pure-components provide hooks like useTabbable (tab-index
      and events) which can be reused by a button component. The UI library
      creates a context that uses the componentHooks to overrride the components
      options and properties.
    </p>
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <h3>
        Credits
        <span role="img" aria-label="heart">
          💖
        </span>
      </h3>
      <p>
        <Avatar
          width={60}
          src="https://avatars3.githubusercontent.com/u/3068563?s=400&v=4"
        />
        <small>
          Structures and many other ideas like component hooks and system
          patterns are copied from&nbsp;
          <a href="https://github.com/diegohaz">@diegohaz's</a>&nbsp;
          <a href="https://github.com/reakit/reakit/tree/next">reakit v2</a>
        </small>
      </p>
    </div>
  </Layout>
);

export default IndexPage;
