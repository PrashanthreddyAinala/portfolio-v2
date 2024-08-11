// src/pages/Projects.tsx
import React from "react";

const blogs = [
  {
    title: "var, let and const in Javascript",
    description:
      "This blog helps in knowing the differences between var, let, and const in JavaScript. It also helps in knowing scope and hoisting in JavaScript.",
    link: "https://hashnode.com/post/var-let-and-const-in-javascript-ckp518nci0462tts187oa87q1",
  },
  {
    title: "React Hooks: useState",
    description:
      "This blog provides a detailed explanation of the useState hook in React.",
    link: "https://hashnode.com/post/react-hooks-usestate-ckozbtoet08ggcrs13kj78sr9",
  },
  {
    title: "React Hooks: useEffect",
    description:
      "This blog provides a detailed explanation of the useEffect hook in React.",
    link: "https://hashnode.com/post/react-hooks-useeffect-ckp45son50fq7e4s127vt10pw",
  },
];
const Blogs: React.FC = () => {
  return (
    <div className="bg-gray-100 md:bg-gray-50">
      <div className="p-6 lg:w-1/2 lg:mx-auto">
        <div className="max-w-2xl">
          <h4 className="mt-6 mb-6 text-center text-xl font-medium text-gray-600">
            Blogs
          </h4>
          <div className="flex flex-wrap">
            {blogs.map((item, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 flex p-2 text-gray-600"
              >
                <div className="relative shadow-sm border rounded-xl p-4 pb-16">
                  <div>
                    <p className="text-lg font-semibold">{item?.title}</p>
                    <p className="text-sm">{item?.description}</p>
                  </div>
                  <div className="mt-2 absolute bottom-4 flex gap-4">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm px-3 py-1.5 rounded-lg shadow-md transition-transform transform hover:scale-105
             bg-gradient-to-b from-blue-100 to-blue-400 text-white border-2 border-blue-300"
                    >
                      Read blog
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
