import React, { useEffect, useState } from "react";
import { FaStar, FaTrashAlt } from "react-icons/fa"; // Import star and trash icons
import { Link } from "react-router-dom"; // For navigation
import DOMPurify from "dompurify"; // For sanitizing HTML

const Manager = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      const response = await fetch("http://localhost:8080/api/ideas/ideas");
      const data = await response.json();

      const ideasWithLabels = data.map((idea) => ({
        ...idea,
        isAIFiltered: Math.random() < 0.5, // Randomly set as true or false
        isRewarded: false,
        isStarPopped: false, // Track whether the star has been clicked
        showFullContent: false, // Track whether to show full content
      }));

      setIdeas(ideasWithLabels);
    };

    fetchIdeas();
  }, []);

  const handleReward = (id) => {
    setIdeas((prevIdeas) =>
      prevIdeas.map((idea) =>
        idea._id === id
          ? { ...idea, isRewarded: !idea.isRewarded, isStarPopped: true }
          : idea
      )
    );

    setTimeout(() => {
      setIdeas((prevIdeas) =>
        prevIdeas.map((idea) =>
          idea.isStarPopped ? { ...idea, isStarPopped: false } : idea
        )
      );
    }, 1000);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/ideas/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setIdeas((prevIdeas) => prevIdeas.filter((idea) => idea._id !== id));
      } else {
        console.error("Failed to delete the idea.");
      }
    } catch (error) {
      console.error("Error deleting the idea:", error);
    }
  };

  const toggleViewMore = (id) => {
    setIdeas((prevIdeas) =>
      prevIdeas.map((idea) =>
        idea._id === id
          ? { ...idea, showFullContent: !idea.showFullContent }
          : idea
      )
    );
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url('/Assets/background.jpg')` }}
    >
      {/* Logout Button */}
      <Link to="/login" className="absolute right-4 top-4">
        <button className="text-white text-xl font-bold bg-green-900 px-8 py-2 rounded-full">
          Logout
        </button>
      </Link>

      {/* Manager Dashboard Header */}
      <div className="flex justify-center mt-8">
        <div className="bg-white p-4 rounded-lg shadow-lg text-center max-w-sm w-full">
          <h1 className="text-3xl font-bold text-green-700">Manager Dashboard</h1>
        </div>
      </div>

      {/* Subheader */}
      <div className="flex justify-center mt-8 mb-4">
        <div className="bg-green-700 text-white py-2 px-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Ideas Submitted for Review</h2>
        </div>
      </div>

      {/* Ideas List */}
      <div className="container mx-auto px-4">
        {ideas.map((idea) => {
          const content = DOMPurify.sanitize(idea.idea);
          const maxLines = 5; // Number of lines to display before "Read More"

          return (
            <div
              key={idea._id}
              className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg mb-4"
            >
              {/* Idea Details */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-lg font-bold text-green-800">
                    {idea.employeeName}
                  </h3>

                  {/* Department Badge */}
                  <span
                    className="px-4 py-1 text-white rounded-full font-bold text-sm"
                    style={{ backgroundColor: "#E53E3E" }}
                  >
                    {idea.department}
                  </span>
                </div>

                {/* Display truncated or full content */}
                <div
                  className="text-gray-800"
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: idea.showFullContent ? "unset" : maxLines,
                    overflow: idea.showFullContent ? "visible" : "hidden",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: content,
                  }}
                ></div>

                {/* Read More/Less Button */}
                <button
                  onClick={() => toggleViewMore(idea._id)}
                  className="text-blue-500 underline mt-2"
                >
                  {idea.showFullContent ? "Read Less" : "Read More"}
                </button>
              </div>

              {/* Actions */}
              <div className="flex flex-col md:flex-row items-center gap-6 mt-4 md:mt-0">
                <button
                  onClick={() => handleReward(idea._id)}
                  className={`text-white ${
                    idea.isRewarded ? "bg-yellow-500" : "bg-gray-300"
                  } p-3 rounded-full transition duration-300`}
                >
                  <FaStar />
                </button>

                <span
                  className={`text-sm font-medium text-white px-3 py-1 rounded-full ${
                    idea.isAIFiltered ? "bg-green-700" : "bg-red-600"
                  }`}
                >
                  {idea.isAIFiltered ? "AI Filtered" : "Not AI Filtered"}
                </span>

                <span className="text-lg font-bold text-gray-700">
                  {idea.votes} Votes
                </span>

                <button
                  onClick={() => handleDelete(idea._id)}
                  className="text-red-600 hover:text-red-800 text-2xl"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Manager;
