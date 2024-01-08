import { Component, ReactNode, ErrorInfo } from "react";

import { ErrorBoundaryState } from "./types";
import { ERROR_TEXT, ERROR_TITLE } from "./config";
import { ErrorBoundaryContainer, Error, Text, Title } from "./styled";

interface ErrorBoundaryProps {
  children: ReactNode;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(_error: Error, errorInfo: ErrorInfo) {
    this.setState({
      errorInfo,
    });
  }

  render() {
    const { hasError, error, errorInfo } = this.state;

    if (hasError) {
      return (
        <ErrorBoundaryContainer>
          <Title>{ERROR_TITLE}</Title>
          <Error>{error && error.toString()}</Error>
          <Text>{ERROR_TEXT}</Text>
          <Text>{errorInfo && errorInfo.componentStack}</Text>
        </ErrorBoundaryContainer>
      );
    }

    return this.props.children;
  }
}
