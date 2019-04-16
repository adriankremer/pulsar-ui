import React, { useState, useEffect, useCallback } from "react";
import ReactDom, { unmountComponentAtNode } from "react-dom";
import { transform } from "buble";
import { Provider } from "@pulsar-ui/core";
import * as system from "@pulsar-ui/system";
import styled from "@emotion/styled";
import { ErrorBoundary } from "../utils/ErrorBoundary";

type PreviewProps = {
  code: string;
};

const importToRequire = (code: string) => {
  // import { xy } from "xylib"; => const { xy } = require("xylib");
  return code.replace(
    /import {([^}]+)} from ([^\s;]+);?/g,
    "const {$1} = require($2);"
  );
};

const compileCode = (code: string) => {
  const refinedCode = `
      ${importToRequire(code)}
      if (Example && typeof Example !== "undefined") {
        return <Example />;
      }
  `;
  const { code: compiledCode } = transform(refinedCode, {
    objectAssign: true
  });
  const depsMap: any = {
    react: React,
    "@pulsar-ui/core": require("@pulsar-ui/core")
  };
  const requireMap = (path: string) => depsMap[path];
  // eslint-disable-next-line no-new-func
  const render = new Function("require", "React", compiledCode);
  return render(requireMap, React);
};

const StyledDiv = styled("div")`
  margin: 3rem 0;
`;

export const Preview = ({ code }: PreviewProps) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [error, setError] = useState<Error | null>(null);

  const handleError = useCallback((e: Error) => {
    setError(e);
  }, []);

  const [initialCode] = useState(code);
  const [rendered, setRendered] = useState(() => {
    try {
      return compileCode(code);
    } catch (e) {
      handleError(e);
    }
    return undefined;
  });

  const unmount = useCallback(() => {
    if (wrapperRef.current) {
      setRendered(null);
      unmountComponentAtNode(wrapperRef.current);
    }
  }, []);

  useEffect(() => {
    if (!code && code === initialCode) {
      return undefined;
    }
    const detach = setTimeout(() => {
      setError(null);
      try {
        const renderedExample = compileCode(code);
        unmount();
        ReactDom.render(
          <Provider system={system}>{renderedExample}</Provider>,
          wrapperRef.current
        );
      } catch (e) {
        unmount();
        handleError(e);
      }
    }, 1);
    return () => clearTimeout(detach);
  }, [code, handleError, unmount]);

  return (
    <ErrorBoundary>
      {error && <pre>{error.toString()}</pre>}
      <StyledDiv ref={wrapperRef}>{rendered}</StyledDiv>
    </ErrorBoundary>
  );
};
