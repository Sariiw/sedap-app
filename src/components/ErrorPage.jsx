import React from "react";

const ErrorPage = ({ errorCode = "404", description = "Page not found", image }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b  to-white text-center p-6">
      {image && (
        <img
          src={image}
          alt={`Error ${errorCode}`}
          className="w-64 mb-8 animate-bounce"
        />
      )}
      <h1 className="text-7xl font-extrabold text-green-600 drop-shadow-lg tracking-wider">
        {errorCode}
      </h1>
      <p className="text-2xl mt-4 text-gray-700 max-w-md leading-relaxed">
        {description}
      </p>
      <button
        onClick={() => window.history.back()}
        className="mt-8 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-md"
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
