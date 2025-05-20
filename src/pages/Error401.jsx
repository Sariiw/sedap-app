import React from "react";
import ErrorPage from "../components/ErrorPage";
import errorImage from '../assets/bg.png';

const Error401 = () => {
  return (
    <ErrorPage
      errorCode="401"
      description="Unauthorized"
      image={errorImage}
    />
  );
};

export default Error401;