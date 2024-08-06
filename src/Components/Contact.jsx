import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <section className="bg-[#101010] min-h-screen">
        <div className="container mx-auto px-12 md:px-[50px] py-12">
          <Link
            to="/"
            className="fixed top-4 right-4 text-white text-5xl font-normal"
          >
            &times;
          </Link>
          <p className="text-center text-[#7E7E7E] text-lg">
            Feel free to contact me anytime
          </p>
          <h1 className="text-center text-white text-4xl font-bold py-4">
            Get in Touch
          </h1>
          <div className="flex justify-center mb-12">
            <div className="bg-customGreen h-1 w-24 animate-continuousExpand"></div>
          </div>

          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-1/2 md:pr-8">
              <h2 className="text-2xl font-bold mb-6 text-white">Message Me</h2>
              <form className="space-y-4">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-1/2 p-2 bg-gray-800 text-white rounded"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-1/2 p-2 bg-gray-800 text-white rounded"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-2 bg-gray-800 text-white rounded"
                />
                <textarea
                  placeholder="Message"
                  className="w-full p-2 bg-gray-800 text-white rounded h-32"
                ></textarea>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="md:w-1/2 md:pl-8 mt-12 md:mt-0 text-white">
              <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
              <p className="mb-6 text-[#7E7E7E]">
                Always available for freelance work if the right project comes
                along. Feel free to contact me!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="bi bi-house-fill text-green-600"></i>
                  <div>
                    <h3 className="font-bold">Name</h3>
                    <p className="text-[#7E7E7E]">Aashish Nepal</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="bi bi-geo-alt-fill text-green-600"></i>
                  <div>
                    <h3 className="font-bold">Location</h3>
                    <p className="text-[#7E7E7E]">Kathmandu, Nepal</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="bi bi-telephone-inbound-fill text-green-600"></i>
                  <div>
                    <h3 className="font-bold">Call Me</h3>
                    <p className="text-[#7E7E7E]">+977 9869100969 </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="bi bi-envelope-open-fill text-green-600"></i>
                  <div>
                    <h3 className="font-bold">Email Me</h3>
                    <p className="text-[#7E7E7E]">nepal.aashish00@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
