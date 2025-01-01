import React from "react";
import Header from "./Header"; // Assuming you have a Header component
import { FaLeaf, FaGlobe, FaUsers } from "react-icons/fa";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div
        className="min-h-screen flex flex-col bg-cover bg-center text-white relative"
        style={{ backgroundImage: `url('/Assets/background.jpg')` }}
      >
        {/* Green Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 container mx-auto px-6 py-16 flex-grow">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-green-300">
              About <span className="text-white">GreenFuture</span>
            </h1>
            <p className="mt-4 text-xl max-w-2xl mx-auto text-green-200">
              Innovating for a sustainable tomorrow. Empowering global communities through renewable energy, eco-friendly urban development, and technological breakthroughs.
            </p>
          </section>

          {/* Three-Column Highlights */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white bg-opacity-80 text-green-900 p-6 rounded-lg shadow-lg text-center">
              <FaLeaf className="text-4xl mx-auto mb-4 text-green-600" />
              <h3 className="text-2xl font-bold">Sustainability</h3>
              <p>
                Pioneering renewable energy solutions and eco-friendly urban designs to combat climate change.
              </p>
            </div>

            <div className="bg-white bg-opacity-80 text-green-900 p-6 rounded-lg shadow-lg text-center">
              <FaGlobe className="text-4xl mx-auto mb-4 text-green-600" />
              <h3 className="text-2xl font-bold">Global Reach</h3>
              <p>
                2,500 employees across 20 offices in 15 countries, fostering cross-border collaboration.
              </p>
            </div>

            <div className="bg-white bg-opacity-80 text-green-900 p-6 rounded-lg shadow-lg text-center">
              <FaUsers className="text-4xl mx-auto mb-4 text-green-600" />
              <h3 className="text-2xl font-bold">Innovation</h3>
              <p>
                Unlocking the potential of every team member with cutting-edge technologies like IMS-Connect.
              </p>
            </div>
          </section>

          {/* Detailed Sections */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Who We Are */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-green-300">Who We Are</h2>
              <p className="text-lg leading-relaxed text-green-200">
                Founded in London, GreenFuture is a global leader in environmental consulting. We specialize in renewable energy, eco-friendly urban development, and environmental policies, aiming to create a sustainable future for all.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-green-200">
                Our team of experts works tirelessly to ensure that every idea, big or small, contributes to solving some of the world’s most pressing environmental challenges.
              </p>
            </div>

            {/* Mission and Vision */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-green-300">Mission and Vision</h2>
              <p className="text-lg leading-relaxed text-green-200">
                Our mission is to be the most trusted name in sustainability and innovation. Through collaboration, cutting-edge technology, and an unwavering commitment to the environment, we strive to build solutions that make a tangible difference.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-green-200">
                Our vision is to empower global communities and inspire collective action for a greener future.
              </p>
            </div>
          </section>

          {/* Journey Section */}
          <section className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-green-300">Our Journey</h2>
            <p className="text-lg max-w-4xl mx-auto leading-relaxed text-green-200">
              Over the years, GreenFuture has transformed challenges into opportunities. From spearheading innovative projects like urban carbon capture to empowering our workforce with IMS-Connect, we continue to lead the way in sustainability. 
              Our journey is a testament to what’s possible when passion meets purpose.
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-green-900 text-white py-6">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} GreenFuture. All Rights Reserved.
            </p>
            <div className="flex justify-center space-x-4 mt-2">
              <a
                href="/privacy-policy"
                className="text-green-400 hover:underline"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-green-400 hover:underline"
              >
                Terms of Service
              </a>
              <a
                href="/contact"
                className="text-green-400 hover:underline"
              >
                Contact Us
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutUs;
