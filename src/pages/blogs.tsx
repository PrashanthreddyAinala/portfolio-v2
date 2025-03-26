import React from "react";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "var, let and const in Javascript",
    description:
      "This blog helps in knowing the differences between var, let, and const in JavaScript. It also helps in knowing scope and hoisting in JavaScript.",
    link: "https://hashnode.com/post/var-let-and-const-in-javascript-ckp518nci0462tts187oa87q1",
    icon: "🔍"
  },
  {
    title: "React Hooks: useState",
    description:
      "This blog provides a detailed explanation of the useState hook in React.",
    link: "https://hashnode.com/post/react-hooks-usestate-ckozbtoet08ggcrs13kj78sr9",
    icon: "⚡"
  },
  {
    title: "React Hooks: useEffect",
    description:
      "This blog provides a detailed explanation of the useEffect hook in React.",
    link: "https://hashnode.com/post/react-hooks-useeffect-ckp45son50fq7e4s127vt10pw",
    icon: "🔄"
  },
];

const Blogs: React.FC = () => {
  // Container variant for staggered children animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  // Individual card variant
  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0,0,0,0.12)"
    }
  };

  return (
    <div className="min-h-screen md:py-16">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 lg:w-2/3"
      >
        <motion.h2 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center text-4xl font-bold text-gray-600 whitespace-nowrap mb-6"
        >
          My Blogs
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{blog.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 text-sm h-24 overflow-hidden">
                  {blog.description}
                </p>
                <motion.a
                  href={blog.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="inline-block bg-gradient-to-r from-gray-500 to-gray-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  Read Blog
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Blogs;