import React from "react";
import ErrorPage from "../components/ErrorPage";
import errorImage from '../assets/bg.png';

const Error404 = () => {
  return (
    <ErrorPage
      errorCode="404"
      description="Page not found"
      image={errorImage}
    />
  );
};

export default Error404;