import React, { useState, useEffect } from "react";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [highlightStyle, setHighlightStyle] = useState<React.CSSProperties>({});
  const [isOpen, setIsOpen] = useState(false);

  const sections = ["about", "projects", "blogs"];
  const mobileSections = ["about", "projects", "blogs", "contact"];

  const handleScroll = () => {
    const currentSection = sections.find((section) => {
      const element = document.getElementById(section);
      if (!element) return false;

      const rect = element.getBoundingClientRect();
      return rect.top <= 60 && rect.bottom > 60;
    });

    if (currentSection) {
      const activeNavLink = document.querySelector<HTMLElement>(
        `.nav-link.${currentSection}`
      );
      if (activeNavLink) {
        setHighlightStyle({
          width: `${activeNavLink.offsetWidth}px`,
          left: `${activeNavLink.offsetLeft}px`,
        });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-0 lg:top-6 z-20">
      <div className="relative bg-white lg:rounded-lg shadow-sm px-4 w-full lg:w-1/2 3xl:max-w-2xl h-12 mx-auto">
        <div className="relative flex justify-between items-center h-12">
          <div className="text-xl font-bold text-gray-800">
            <div
              className="cursor-pointer"
              onClick={() => scrollToSection("about")}
            >
              <Logo />
            </div>
          </div>
          <div className="relative hidden md:flex space-x-6">
            <span
              className="absolute top-1 left-0 h-8 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg transition-all duration-300"
              style={highlightStyle}
            ></span>
            {sections.map((section) => (
              <div
                key={section}
                className={`nav-link px-3 py-2 transition duration-300 z-10 cursor-pointer ${section}`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </div>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-2 bg-white space-y-2 rounded-lg shadow-md p-4">
            {mobileSections.map((section) => (
              <div
                key={section}
                className="nav-link block px-3 py-2 cursor-pointer"
                onClick={() => {
                  scrollToSection(section);
                  setIsOpen(false);
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
