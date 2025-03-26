import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Cocktaildb",
    description:
      "This application is built with React. In this, you can view all the recipes of cocktails. You can search for a cocktail and add the desired cocktail to the favorites list. You can also know all the details of the cocktail and the ingredients used.",
    live_project_link: "https://cocktailapp1.netlify.app/",
    source_code_link: "https://github.com/PrashanthreddyAinala/cocktailapp",
    icon: "🍸",
    color: "from-pink-500 to-red-500"
  },
  {
    title: "Movie recommendation app",
    description:
      "This application is built with React. In this, you can search for a movie and see the overview as well as the rating of that particular movie.",
    live_project_link: "https://mymovie-app1.netlify.app/",
    source_code_link: "https://github.com/PrashanthreddyAinala/Movies-app",
    icon: "🎬",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Chat Application",
    description:
      "This is a chat application built with React. You can make individual chats and group chats as well. This is built with the help of React-chat-engine.",
    live_project_link: "https://chat-app-2.netlify.app/",
    source_code_link: "https://github.com/PrashanthreddyAinala/chat-app",
    icon: "💬",
    color: "from-green-400 to-blue-500"
  },
  {
    title: "Gallery App",
    description:
      "This is a photo gallery app built with React. In this, you can upload photos and view them. Firebase is used as the backend for storing the images.",
    live_project_link: "https://mygalleryapp.netlify.app/",
    source_code_link: "https://github.com/PrashanthreddyAinala/gallery-app",
    icon: "🖼️",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Notes Making App",
    description:
      "This is a notes making app made with React where you can add, edit, and delete notes.",
    live_project_link: "https://notes-making.netlify.app/",
    source_code_link:
      "https://github.com/PrashanthreddyAinala/Notes-making-app",
    icon: "📝",
    color: "from-yellow-400 to-orange-500"
  },
  {
    title: "E-Commerce App",
    description:
      "This is an e-commerce app built with React. You can see all the products and add the desired product to the cart.",
    live_project_link: "https://fashion-palace.netlify.app/",
    source_code_link: "https://github.com/PrashanthreddyAinala/Fashion-store",
    icon: "🛍️",
    color: "from-teal-400 to-blue-500"
  },
  {
    title: "Todo List",
    description:
      "This is my daily Todo-List to which I am habituated. It gives me energy for the next day if I mark all tasks by the end of the day.",
    live_project_link: "https://todoapp-1.netlify.app/",
    source_code_link: "https://github.com/PrashanthreddyAinala/Todo-List",
    icon: "✅",
    color: "from-red-500 to-yellow-500"
  },
  {
    title: "Travel Guide",
    description:
      "Do you love to travel? Here are some of my favorite places to travel in South India.",
    live_project_link: "https://dt6qx.csb.app/",
    source_code_link: "https://github.com/PrashanthreddyAinala/Tourist-guide",
    icon: "🌴",
    color: "from-green-500 to-emerald-600"
  },
];

const Projects: React.FC = () => {
  // Container variant for staggered children animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  // Individual card variant with spectacular animation
  const cardVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.6,
      rotate: -180,
      x: -100,
    },
    visible: { 
      opacity: 1,
      scale: 1,
      rotate: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200,
        mass: 1.5
      }
    },
    hover: {
      scale: 1.05,
      rotate: 3,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-16 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <motion.h2 
          initial={{ 
            scale: 0.8, 
            opacity: 0,
            y: -50
          }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            y: 0
          }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            bounce: 0.4
          }}
          className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500"
        >
          My Projects
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="relative transform transition-all duration-300 perspective-1000"
            >
              <motion.div 
                className={`bg-gradient-to-br ${project.color} rounded-2xl shadow-2xl overflow-hidden relative`}
                initial={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                whileHover={{ 
                  boxShadow: '0 15px 25px rgba(0,0,0,0.2)',
                }}
              >
                <div className="p-6 relative z-10">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4 transform transition-transform group-hover:rotate-12">{project.icon}</span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                  <p className="text-white/80 mb-6 text-sm h-24 overflow-hidden">
                    {project.description}
                  </p>
                  <div className="flex space-x-4 mt-4">
                    <motion.a
                      href={project.live_project_link}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all"
                    >
                      Live Project
                    </motion.a>
                    <motion.a
                      href={project.source_code_link}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all"
                    >
                      Source Code
                    </motion.a>
                  </div>
                </div>
                {/* Overlay effect */}
                <motion.div 
                  className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-20 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;