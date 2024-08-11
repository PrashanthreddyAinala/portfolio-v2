// src/pages/Contact.tsx
import React from "react";
import email from "../assets/images/email.png";
import phone from "../assets/images/phone.png";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.png";
import twitter from "../assets/images/twitter.png";

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-100 md:bg-gray-50">
      <div className="p-6 lg:w-1/2 lg:mx-auto">
        <div className="max-w-2xl">
          <h4 className="mt-6 mb-8 text-center text-xl font-medium text-gray-600">
            Contact Me
          </h4>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="mailto: prashanthreddyainala@gmail.com">
              <div className="flex flex-nowrap gap-1 items-center border-2 px-1 md:px-3 rounded-full shadow-md transition-transform transform hover:scale-105 select-none cursor-pointer">
                <img src={email} alt="" className="w-5" />
                <p>prashanthreddyainala@gmail.com</p>
              </div>
            </a>
            <a href="tel:9553971082">
              <div className="flex flex-wrap gap-1 items-center border-2 px-3 rounded-full shadow-md transition-transform transform hover:scale-105 select-none cursor-pointer">
                <img src={phone} alt="" className="w-5" />
                <p>+91 9553971082</p>
              </div>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-12 mt-8">
            <a
              href="https://www.linkedin.com/in/prashanth-reddy-7143831a4/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="w-9 h-8 border-2 flex justify-center items-center rounded-full shadow-md transition-transform transform hover:scale-105 select-none cursor-pointer">
                <img src={linkedin} alt="" />
              </div>
            </a>
            <a
              href="https://github.com/PrashanthreddyAinala"
              target="_blank"
              rel="noreferrer"
            >
              <div className="w-9 h-8 border-2 flex justify-center items-center rounded-full shadow-md transition-transform transform hover:scale-105 select-none cursor-pointer">
                <img src={github} alt="" />
              </div>
            </a>
            <a
              href="https://twitter.com/ainala_reddy"
              target="_blank"
              rel="noreferrer"
            >
              <div className="w-9 h-8 border-2 flex justify-center items-center rounded-full shadow-md transition-transform transform hover:scale-105 select-none cursor-pointer">
                <img src={twitter} alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
