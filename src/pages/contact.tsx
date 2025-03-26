import React, { useState } from "react";
import email from "../assets/images/email.png";
import phone from "../assets/images/phone.png";
import map from "../assets/images/map-pin.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-100 md:bg-gray-50 pb-12">
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h4 className="mt-6 mb-8 text-center text-4xl font-bold text-gray-600">
          Contact Me
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - "Let's connect and collaborate" */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-gray mb-4">
              Let’s Connect and Collaborate
            </h2>
            <p className="text-lg text-gray-700">
              I’d love to hear from you! Whether you’re looking for more
              information or want to collaborate on something great, feel free
              to reach out to us. I am always open to exciting opportunities and
              conversations.
            </p>
            <div >
              <a href="mailto: prashanthreddyainala@gmail.com">
                <div className="flex items-center gap-2 my-4">
                  <img
                    src={email}
                    alt=""
                    className="border-2 p-1 rounded-full"
                  />
                  <p className="text-gray-600">prashanthreddyainala@gmail.com</p>
                </div>
              </a>
              <a href="tel:9553971082">
                <div className="flex items-center gap-2 my-4">
                  <img
                    src={phone}
                    alt=""
                    className="border-2 p-1 rounded-full"
                  />
                  <p className="text-gray-600">+91 9553971082</p>
                </div>
              </a>
                <div className="flex items-center gap-2 my-4">
                  <img
                    src={map}
                    alt=""
                    className="border-2 p-1 rounded-full"
                  />
                  <p className="text-gray-600">Hyderabad, Telangana, India.</p>
                </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-8 rounded-lg border shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  // rows="4"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-6 w-full py-3 bg-gray-600 text-white font-semibold rounded-md shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-gray-400 font-semibold">© 2025 Prashanth Reddy Ainala. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Contact;
