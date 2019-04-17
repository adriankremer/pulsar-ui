import React from "react";

type ErrorBoundaryState = {
  error: Error | undefined;
};

export class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    error: undefined
  };

  static getDerivedStateFromError(error: ErrorBoundaryState) {
    return { error };
  }

  componentDidCatch() {
    // ..
  }

  render() {
    if (this.state.error) {
      return <pre style={{ color: "red" }}>{this.state.error}</pre>;
    }
    return this.props.children;
  }
}
