import React, { Component } from 'react';

import { ErrorBoundaryProps, ErrorBoundaryState } from '@/components/ErrorBoundary/types';

import { ContainerError } from './styles';

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps | Readonly<ErrorBoundaryProps>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <ContainerError>
          <h3>Something went wrong, try again later</h3>
        </ContainerError>
      );
    }

    return children;
  }
}
