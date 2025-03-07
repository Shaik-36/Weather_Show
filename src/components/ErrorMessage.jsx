import React from "react";

const ErrorMessage = () => {
  return (
    <div className="bg-red-500 text-white p-4 rounded-lg text-center">
      <p className="font-semibold">Invalid City Name</p>
      <p>Please check the spelling and try again.</p>
    </div>
  );
};

export default ErrorMessage;
