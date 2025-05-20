import React from "react";
import ErrorPage from "../components/ErrorPage";
import errorImage from '../assets/bg.png';

const Error403 = () => {
  return (
    <ErrorPage
      errorCode="403"
      description="Forbidden"
      image={errorImage}
    />
  );
};

export default Error403;