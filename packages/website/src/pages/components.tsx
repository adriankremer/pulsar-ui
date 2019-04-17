import React from "react";
import { Link } from "gatsby";
import { ComponentLayout } from "../components/ComponentLayout";
import SEO from "../components/seo";

const SecondPage = () => (
  <ComponentLayout>
    <SEO title="Page two" />
    <h1>Components</h1>
    <p>here are the current components!</p>
    <Link to="/">Go back to the homepage</Link>
  </ComponentLayout>
);

export default SecondPage;
