import React, { useState } from "react";
import Header from "./Header";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setMessage("Thank you for reaching out! We'll get back to you soon.");
      setFormData({ name: "", email: "", purpose: "", message: "" });
    }, 2000);
  };

  return (
    <>
      <Header />
      <div
        className="min-h-screen flex items-center justify-center px-4 py-12 bg-cover bg-center"
        style={{ backgroundImage: `url('./Assets/background.jpg')` }}
      >
        <div className="w-full max-w-md bg-white bg-opacity-90 p-8 rounded-lg shadow-lg border border-green-200">
          <h1 className="text-3xl font-bold mb-6 text-center text-green-700">Contact Us</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-green-800"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
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
                htmlFor="purpose"
                className="block text-sm font-medium text-green-800"
              >
                Purpose
              </label>
              <input
                type="text"
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
                placeholder="E.g., Inquiry, Feedback, Collaboration"
                className="w-full mt-1 p-2 border border-green-300 rounded-full shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-green-800"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full mt-1 p-2 border border-green-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {message && (
            <div className="mt-4 text-center text-sm text-green-700">
              {message}
            </div>
          )}
        </div>
      </div>
      <footer className="bg-green-900 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} GreenFuture. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="/privacy-policy" className="text-green-400 hover:underline">
              Privacy Policy
            </a>
            <a href="/terms" className="text-green-400 hover:underline">
              Terms of Service
            </a>
            <a href="/contact" className="text-green-400 hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactUs;
