import React from "react";
import ErrorPage from "../components/ErrorPage";
import errorImage from '../assets/bg.png';


const Error400 = () => {
  return (
    <ErrorPage
      errorCode="400"
      description="Bad Request"
      image={errorImage}
    />
  );
};

export default Error400;