import React, { Component } from 'react';

import { ErrorBoundaryProps, ErrorBoundaryState } from '@/components/ErrorBoundary/types';

import { Loader } from '../ui-components/Loader';

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
        <div>
          <Loader />
          <h3>Something went wrong, try again later</h3>
        </div>
      );
    }

    return children;
  }
}
