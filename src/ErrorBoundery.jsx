/* eslint-disable react/prop-types */
function ErrorFallback({ error, resetErrorBoundary }) {
  
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{ color: "red" }}>{error.message}</pre>
        <button onClick={resetErrorBoundary}> Try Again</button>
      </div>
    );
  }

  export default ErrorFallback;