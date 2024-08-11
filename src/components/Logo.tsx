// src/components/Logo.tsx
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 flex items-center justify-center">
          <div className="relative text-2xl font-bold text-gray-800">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-indigo-600"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="50" stroke="currentColor" strokeWidth="5" />
              </svg>
            </div>
            <span className="relative z-10">PR</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
