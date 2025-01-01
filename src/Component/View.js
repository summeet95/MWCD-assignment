import React, { useEffect, useState } from "react";
import { FaThumbsUp } from "react-icons/fa"; // Import thumbs up icon
import DOMPurify from "dompurify"; // For sanitizing HTML

const View = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    // Fetch ideas from the backend
    const fetchIdeas = async () => {
      const response = await fetch("http://localhost:8080/api/ideas/ideas");
      const data = await response.json();

      // Add a random AI filter label to each idea
      const ideasWithLabels = data.map((idea) => ({
        ...idea,
        isAIFiltered: Math.random() < 0.5, // Randomly set as true or false
        showFullContent: false, // Add a flag to control content visibility
      }));

      setIdeas(ideasWithLabels);
    };

    fetchIdeas();
  }, []);

  // Handle vote for an idea
  const handleVote = async (id) => {
    const response = await fetch(
      `http://localhost:8080/api/ideas/ideas/${id}`,
      {
        method: "PUT",
      }
    );

    if (response.ok) {
      const updatedIdea = await response.json();
      // Update the local state to reflect the new vote count
      setIdeas((prevIdeas) =>
        prevIdeas.map((idea) =>
          idea._id === id ? { ...idea, votes: updatedIdea.votes } : idea
        )
      );
    }
  };

  // Toggle the "View More" state
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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
        Collaborate on Ideas Submitted
      </h1>

      <div className="space-y-6">
        {ideas.map((idea) => {
          const content = DOMPurify.sanitize(idea.idea);
          const maxLines = 5;

          return (
            <div
              key={idea._id}
              className="p-6 border rounded-lg shadow-lg bg-white"
            >
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h2 className="text-xl font-bold text-green-800">
                      {idea.employeeName}
                    </h2>

                    {/* Department Badge */}
                    <span
                      className="px-4 py-1 text-white rounded-full font-bold text-sm"
                      style={{ backgroundColor: "#E53E3E" }} // Red background
                    >
                      {idea.department}
                    </span>
                  </div>

                  {/* Display truncated or full content */}
                  <div
                    className="text-md text-gray-700 mt-2"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: idea.showFullContent ? "unset" : maxLines,
                      overflow: idea.showFullContent ? "visible" : "hidden",
                    }}
                    dangerouslySetInnerHTML={{ __html: content }}
                  ></div>

                  {/* View More/Less Button */}
                  <button
                    onClick={() => toggleViewMore(idea._id)}
                    className="text-blue-500 underline mt-2"
                  >
                    {idea.showFullContent ? "View Less" : "View More"}
                  </button>
                </div>

                <div className="flex flex-col items-center justify-center ml-6">
                  <button
                    onClick={() => handleVote(idea._id)}
                    className="text-white bg-green-600 hover:bg-green-800 text-3xl p-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
                  >
                    <FaThumbsUp />
                  </button>
                  <span className="text-lg font-bold text-gray-700 mt-2">
                    {idea.votes} Votes
                  </span>

                  <span
                    className="inline-block mt-2 px-3 py-1 text-white rounded-full font-bold"
                    style={{
                      backgroundColor: idea.isAIFiltered
                        ? "#4C51BF" // Indigo for AI filtered
                        : "#E53E3E", // Red for not AI filtered
                    }}
                  >
                    {idea.isAIFiltered ? "AI Filtered" : "Not AI Filtered"}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default View;
