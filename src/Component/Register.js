import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import registerPicture from "../Assets/register_image.png"; // Adjust the path to your local image
import Header from "./Header";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    isManager: false, // New field for manager checkbox
  });
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/register",
        formData
      );
      setMessage(
        `User registered successfully! Welcome, ${response.data.username}`
      );
    } catch (error) {
      setMessage(
        error.response?.data?.message || "An error occurred while registering."
      );
    }
  };

  return (
    <>
      {/* Header */}
      <Header />

      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/Assets/background.jpg')` }}
      >
        {/* Main container with flexbox */}
        <div className="flex w-full max-w-4xl rounded-lg shadow-lg overflow-hidden bg-white bg-opacity-90">
          {/* Left side: Image */}
          <div
            className="w-1/2 bg-cover bg-center hidden md:block"
            style={{
              backgroundImage: `url(${registerPicture})`,
            }}
          ></div>

          {/* Right side: Register Form */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-6">
            <div className="w-full max-w-md">
              <h1 className="text-3xl font-bold mb-6 text-center text-green-700">
                Register
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-green-800"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 p-2 border border-green-300 rounded-full shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-green-800"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 p-2 border border-green-300 rounded-full shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-green-800"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 p-2 border border-green-300 rounded-full shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="isManager"
                    name="isManager"
                    checked={formData.isManager}
                    onChange={handleChange}
                    className="mr-2 text-green-500 focus:ring-green-500"
                  />
                  <label
                    htmlFor="isManager"
                    className="text-sm font-medium text-green-800"
                  >
                    Register as Manager
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition"
                >
                  Register
                </button>
              </form>
              {message && (
                <div className="mt-4 text-center text-sm text-green-700">
                  {message}
                </div>
              )}
              <div className="mt-4 text-center">
                <p className="text-sm text-green-700">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-green-600 hover:text-green-700"
                  >
                    Login here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
