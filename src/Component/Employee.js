import React from "react";
import { Link } from "react-router-dom";
import View from "./View"; // Import the view component
import SubmitIdea from "./Idea"; // Import the SubmitIdea component

const Employee = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex flex-col"
      style={{ backgroundImage: `url('/Assets/background.jpg')` }}
    >
      <div className="relative z-10">
        {/* Logout Button */}
        <Link to="/login" className="absolute right-4 top-4">
          <button className="text-white text-xl font-bold bg-green-900 px-8 py-2 rounded-full">
            Logout
          </button>
        </Link>

        {/* Employee Dashboard Header */}
        <div className="flex justify-center mt-8 mb-8">
          <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg text-center max-w-sm w-full">
            <h1 className="text-3xl font-bold text-green-700">
              Employee Dashboard
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SubmitIdea Component */}
            <div
              className="bg-white bg-opacity-0 p-8 rounded-lg w-full"
              style={{
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              <SubmitIdea />
            </div>

            {/* View Component */}
            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
              <View />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
