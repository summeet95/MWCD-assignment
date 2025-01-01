import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const SubmitIdea = () => {
  const [formData, setFormData] = useState({
    employeeName: "",
    department: "",
    idea: "", // Store the rich text content
  });

  const departments = [
    "HR",
    "Sales",
    "Marketing",
    "Development",
    "Design",
    "Support",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditorChange = (content) => {
    setFormData({ ...formData, idea: content });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const ideaData = {
      employeeName: formData.employeeName,
      department: formData.department,
      idea: formData.idea,
    };

    try {
      const response = await fetch("http://localhost:8080/api/ideas/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ideaData),
      });

      if (response.ok) {
        alert("Idea submitted successfully!");
        setFormData({
          employeeName: "",
          department: "",
          idea: "",
        });
        window.location.reload(); // Refresh the page after successful submission
      } else {
        alert("Failed to submit idea. Please try again later.");
      }
    } catch (err) {
      console.error("Error submitting idea:", err);
      alert("Error: Could not submit idea. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="bg-white bg-opacity-90 p-7 rounded-lg shadow-lg max-w-lg"
    >
      <h2 className="text-2xl font-bold text-green-700 mb-6">Submit Idea</h2>
      <div className="mb-4">
        <label
          htmlFor="employeeName"
          className="block text-sm font-medium text-green-800 mb-1"
        >
          Employee Name
        </label>
        <input
          id="employeeName"
          name="employeeName"
          value={formData.employeeName}
          onChange={handleInputChange}
          required
          className="w-full mt-1 p-2 border border-green-300 rounded-full shadow-sm focus:ring-green-500 focus:border-green-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="department"
          className="block text-sm font-medium text-green-600 mb-1"
        >
          Department
        </label>
        <select
          id="department"
          name="department"
          value={formData.department}
          onChange={handleInputChange}
          required
          className="w-full p-2 border border-green-600 rounded-full shadow-sm focus:ring-red-500 focus:border-green-500 text-yellow-600"
        >
          <option value="" disabled>
            Select Department
          </option>
          {departments.map((dept, index) => (
            <option key={index} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="idea"
          className="block text-sm font-medium text-green-800 mb-1"
        >
          Your Idea
        </label>
        <Editor
          apiKey="da88bbhlcujx7dxjfajz7i1j4ej98zouwf47cdxd8vdf22v7" // Optional: Add your TinyMCE API key here
          value={formData.idea}
          init={{
            height: 300,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help",
          }}
          onEditorChange={handleEditorChange}
        />
      </div>

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded-full font-bold"
      >
        Submit Idea
      </button>
    </form>
  );
};

export default SubmitIdea;
