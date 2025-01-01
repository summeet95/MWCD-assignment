import React from "react";
import Header from "./Header";
import consultingImage from "../Assets/consulting.jpg";
import innovationImage from "../Assets/innovation.jpg";
import collaborationImage from "../Assets/collaboration.jpg";
import bgImage from "../Assets/bg.png";
import client1Image from "../Assets/charles.jpeg";
import client2Image from "../Assets/john.jpg";
import client3Image from "../Assets/alice.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen text-white flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="text-center px-4">
          <h1 className="text-6xl font-extrabold mb-6">Sustainability for a Better Future</h1>
          <p className="text-2xl mb-6">Empowering innovation to create a sustainable world.</p>
          <a
            href="#services"
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full text-lg font-bold"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="p-16 bg-green-100">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center p-8 bg-white shadow-lg rounded-lg">
            <img
              src={consultingImage}
              alt="Consulting"
              className="mx-auto mb-6 h-40 w-40 object-cover rounded-full"
            />
            <h3 className="text-2xl font-bold text-green-800">Consulting</h3>
            <p className="text-green-700 mt-4 text-lg">
              Our consulting services provide expert guidance to help organizations achieve their sustainability goals. From strategy development to implementation, our team works closely with you to identify opportunities, optimize operations, and meet compliance standards.
            </p>
          </div>
          <div className="text-center p-8 bg-white shadow-lg rounded-lg">
            <img
              src={innovationImage}
              alt="Innovation"
              className="mx-auto mb-6 h-40 w-40 object-cover rounded-full"
            />
            <h3 className="text-2xl font-bold text-green-800">Innovation</h3>
            <p className="text-green-700 mt-4 text-lg">
              We specialize in fostering innovation with cutting-edge solutions tailored to your needs. Our innovation services include product design, technology integration, and process improvement, enabling you to stay ahead in a competitive market.
            </p>
          </div>
          <div className="text-center p-8 bg-white shadow-lg rounded-lg">
            <img
              src={collaborationImage}
              alt="Collaboration"
              className="mx-auto mb-6 h-40 w-40 object-cover rounded-full"
            />
            <h3 className="text-2xl font-bold text-green-800">Collaboration</h3>
            <p className="text-green-700 mt-4 text-lg">
              Collaboration is at the heart of what we do. We bring together diverse teams and stakeholders to foster partnerships that drive impactful results. Whether it’s cross-departmental initiatives or global projects, we ensure seamless collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="p-12 bg-white">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-green-100 shadow-lg rounded-lg">
            <img
              src={client1Image}
              alt="Charles Smith"
              className="mx-auto mb-4 h-32 w-32 object-cover rounded-full"
            />
            <p className="text-green-700">
              "GreenFuture transformed our approach to sustainability. Their solutions are unparalleled!"
            </p>
            <h4 className="text-green-800 mt-4 font-bold">- Charles Smith</h4>
          </div>
          <div className="text-center p-6 bg-green-100 shadow-lg rounded-lg">
            <img
              src={client2Image}
              alt="John Smith"
              className="mx-auto mb-4 h-32 w-32 object-cover rounded-full"
            />
            <p className="text-green-700">
              "Thanks to their innovative platform, our team collaborates better than ever."
            </p>
            <h4 className="text-green-800 mt-4 font-bold">- John Smith</h4>
          </div>
          <div className="text-center p-6 bg-green-100 shadow-lg rounded-lg">
            <img
              src={client3Image}
              alt="Alice Brown"
              className="mx-auto mb-4 h-32 w-32 object-cover rounded-full"
            />
            <p className="text-green-700">
              "Their guidance helped us achieve our sustainability targets ahead of schedule."
            </p>
            <h4 className="text-green-800 mt-4 font-bold">- Alice Brown</h4>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="p-12 bg-green-600 text-white text-center relative overflow-hidden">
        <h2 className="text-4xl font-bold mb-4">Ready to Innovate?</h2>
        <p className="text-xl mb-6">
          GreenFuture’s journey with IMS-Connect is a testament to the power of transformation through collaboration and technology. By implementing innovative solutions like IMS-Connect, we have unlocked the creative potential of our global workforce. From urban carbon capture projects to AI-powered idea filtering, our approach continues to redefine sustainability.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="#contact"
            className="bg-white text-green-600 hover:bg-green-700 hover:text-white py-3 px-6 rounded-full text-lg font-bold"
          >
            Contact Us
          </a>
          <a
            href="#projects"
            className="bg-white text-green-600 hover:bg-green-700 hover:text-white py-3 px-6 rounded-full text-lg font-bold"
          >
            Explore Projects
          </a>
        </div>
        <div className="absolute top-0 left-0 w-full h-full animate-pulse bg-gradient-to-br from-green-400 to-green-700 opacity-10"></div>
      </section>

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
  );
};

export default Home;
