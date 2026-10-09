import { Component, type ErrorInfo, type ReactNode } from 'react';

interface State { hasError: boolean }

/** Last-resort fallback so a render error never leaves a blank white page. */
export class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Unhandled render error', error, info.componentStack);
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Something went wrong</h1>
        <p style={{ marginBottom: '1.5rem' }}>Please reload the page. If the problem continues, contact Murivest Lettings.</p>
        <a href="/" style={{ textDecoration: 'underline' }}>Back to home</a>
      </div>
    );
  }
}