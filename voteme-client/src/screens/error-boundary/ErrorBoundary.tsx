import React from "react";
import { NextPage } from "next";

interface ErrorProps {
  error?: Error;
}

const ErrorBoundaryPage: NextPage<ErrorProps> = ({ error }) => {
  if (error) {
    return (
      <div>
        <h1>Something went wrong</h1>
        <p>We&apos;re sorry — an error occurred.</p>
        <p>Error message: {error.message}</p>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

ErrorBoundaryPage.getInitialProps = async ({ err }) => {
  if (err) {
    return { error: err };
  }
  return {};
};

export default ErrorBoundaryPage;
