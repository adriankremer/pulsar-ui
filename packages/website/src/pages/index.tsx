import React from "react";
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
  </Layout>
);

export default IndexPage;
