import React from 'react';
import Footer from './components/Footer';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state and show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
     
      return (
        <>
          <Footer />
          <div style={{ textAlign: 'center', color: 'silver', paddingTop: '40px' }}>
            <h1>Something went wrong.</h1>
          </div>
        </>
      )
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
