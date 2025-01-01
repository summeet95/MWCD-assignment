import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import loginPicture from "../Assets/login_image.png"; // Adjust path as needed
import Header from "./Header";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Send login request
      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        formData
      );

      // Successful login
      setMessage(`Welcome back, ${response.data.user.username}!`);

      // Save auth token in localStorage
      localStorage.setItem("authToken", response.data.token);

      // Check if the user is a manager and navigate accordingly
      if (response.data.user.isManager) {
        navigate("/manager"); // Navigate to manager dashboard
      } else {
        navigate("/employee"); // Navigate to employee dashboard
      }
    } catch (error) {
      // Handle error (e.g., invalid credentials)
      setMessage(
        error.response?.data?.message || "An error occurred during login."
      );
    } finally {
      setLoading(false);
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
              backgroundImage: `url(${loginPicture})`,
            }}
          ></div>

          {/* Right side: Login Form */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-6">
            <div className="w-full max-w-md">
              <h1 className="text-3xl font-bold mb-6 text-center text-green-700">
                Login
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </form>

              {message && (
                <div className="mt-4 text-center text-sm text-green-700">
                  {message}
                </div>
              )}

              <div className="mt-4 text-center">
                <p className="text-sm text-green-700">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="text-green-600 hover:text-green-700"
                  >
                    Register here
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

export default Login;
