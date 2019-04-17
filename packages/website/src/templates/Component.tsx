import React from "react";
import { graphql } from "gatsby";
import RehypeReact from "rehype-react";
import { Provider } from "@pulsar-ui/core";
import * as system from "@pulsar-ui/system";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "./codemirror.css";
import { Editor, useEditorState } from "../components/Editor";
import { Preview } from "../components/Preview";
import { ComponentLayout } from "../components/ComponentLayout";

if (typeof navigator !== "undefined") {
  require("codemirror/mode/jsx/jsx");
}

type ComponentProps = {
  data: {
    markdownRemark: {
      htmlAst: string;
      html: string;
      frontmatter: {
        title: string;
      };
    };
  };
};

function getText(props: { children?: React.ReactNode }): string {
  const children = React.Children.toArray(props.children);
  return children.reduce<string>((acc, curr) => {
    if (typeof curr === "string") {
      return `${acc}${curr}`;
    }
    if (typeof curr === "object" && curr !== null && "props" in curr) {
      return `${acc}${getText(curr.props)}`;
    }
    return acc;
  }, "");
}

const { Compiler: renderAst } = new RehypeReact({
  createElement: React.createElement,
  components: {
    pre: (props: React.HTMLAttributes<any>) => {
      const state = useEditorState({ code: () => getText(props) });
      return (
        <>
          <Preview {...state} />
          <Editor {...state} />
        </>
      );
    }
  }
});

const Component = ({ data }: ComponentProps) => {
  const { htmlAst } = data.markdownRemark;
  return (
    <Provider system={system}>
      <ComponentLayout>{renderAst(htmlAst)}</ComponentLayout>
    </Provider>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      html
      frontmatter {
        title
      }
    }
  }
`;

export default Component;
