import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import {
  FaInfoCircle,
  FaPhoneAlt,
  FaSignOutAlt,
  FaSignInAlt,
} from "react-icons/fa"; // Import icons from react-icons
import logo from "../Assets/logo.png"; // Import logo

const Header = () => {
  const navigate = useNavigate(); // Initialize navigate hook
  const isLoggedIn = Boolean(localStorage.getItem("authToken")); // Check if the user is logged in

  const handleAuthAction = () => {
    if (isLoggedIn) {
      // Clear session or auth token
      localStorage.removeItem("authToken");
      navigate("/login"); // Navigate to the login page after logout
    } else {
      navigate("/login"); // Navigate to the login page for login
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
          body {
            font-family: 'Raleway', sans-serif;
          }
          .nav-link {
            padding: 8px 16px; /* Padding inside the circular box */
            border-radius: 9999px; /* Fully rounded */
            background-color: #ffc107; /* Yellow background */
            color: black; /* Black text for contrast */
            display: inline-flex;
            align-items: center;
            transition: all 0.3s ease;
          }
          .nav-link:hover {
            background-color: #ffa000; /* Darker yellow on hover */
          }
        `}
      </style>
      <header
        className="p-4 text-black flex justify-between items-center shadow-md"
        style={{
          backgroundImage: `url('/Assets/header.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Website Logo (clickable and takes to home page) */}
        <Link
          to="/"
          className="text-4xl font-bold flex items-center"
        >
          <img src={logo} alt="Logo" className="h-14 w-14 mr-2" />
          <span>GreenFuture</span>
        </Link>

        {/* Navigation Links with Icons */}
        <nav className="space-x-6 flex items-center">
          <Link
            to="/about"
            className="text-xl font-bold nav-link"
          >
            <FaInfoCircle className="mr-2" /> About Us
          </Link>
          <Link
            to="/contact"
            className="text-xl font-bold nav-link"
          >
            <FaPhoneAlt className="mr-2" /> Contact Us
          </Link>

          {/* Login/Logout Button */}
          <button
            onClick={handleAuthAction}
            className="text-xl font-bold nav-link"
          >
            {isLoggedIn ? (
              <>
                <FaSignOutAlt className="mr-2" /> Login
              </>
            ) : (
              <>
                <FaSignInAlt className="mr-2" /> Login
              </>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
