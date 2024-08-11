// src/pages/Projects.tsx
import React from "react";

const projects = [
  {
    title: "Cocktaildb",
    description:
      "This application is built with React. In this, you can view all the recipes of cocktails. You can search for a cocktail and add the desired cocktail to the favorites list. You can also know all the details of the cocktail and the ingredients used.",
    live_project_link: "https://cocktailapp1.netlify.app/",
    source_code_link: "https://github.com/PrashanthreddyAinala/cocktailapp",
  },
  {
    title: "Movie recommendation app",
    description:
      "This application is built with React. In this, you can search for a movie and see the overview as well as the rating of that particular movie.",
    live_project_link: "https://mymovie-app1.netlify.app/",
    source_code_link: "https://github.com/PrashanthreddyAinala/Movies-app",
  },
  {
    title: "Chat Application",
    description:
      "This is a chat application built with React. You can make individual chats and group chats as well. This is built with the help of React-chat-engine.",
    live_project_link: "https://chat-app-2.netlify.app/",
    source_code_link: "https://github.com/PrashanthreddyAinala/chat-app",
  },
  {
    title: "Gallery App",
    description:
      "This is a photo gallery app built with React. In this, you can upload photos and view them. Firebase is used as the backend for storing the images.",
    live_project_link: "https://mygalleryapp.netlify.app/",
    source_code_link: "https://github.com/PrashanthreddyAinala/gallery-app",
  },
  {
    title: "Notes Making App",
    description:
      "This is a notes making app made with React where you can add, edit, and delete notes.",
    live_project_link: "https://notes-making.netlify.app/",
    source_code_link:
      "https://github.com/PrashanthreddyAinala/Notes-making-app",
  },
  {
    title: "E-Commerce App",
    description:
      "This is an e-commerce app built with React. You can see all the products and add the desired product to the cart.",
    live_project_link: "https://fashion-palace.netlify.app/",
    source_code_link: "https://github.com/PrashanthreddyAinala/Fashion-store",
  },
  {
    title: "Todo List",
    description:
      "This is my daily Todo-List to which I am habituated. It gives me energy for the next day if I mark all tasks by the end of the day.",
    live_project_link: "https://todoapp-1.netlify.app/",
    source_code_link: "https://github.com/PrashanthreddyAinala/Todo-List",
  },
  {
    title: "Travel Guide",
    description:
      "Do you love to travel? Here are some of my favorite places to travel in South India.",
    live_project_link: "https://dt6qx.csb.app/",
    source_code_link: "https://github.com/PrashanthreddyAinala/Tourist-guide",
  },
];

const Projects: React.FC = () => {
  return (
    <div className="bg-gray-100 md:bg-gray-50 pt-4">
      <div className="p-6 lg:w-1/2 lg:mx-auto">
        <div className="max-w-2xl">
          <h4 className="mt-8 mb-6 text-center text-xl font-medium text-gray-600">
            Projects
          </h4>
          <div className="flex flex-wrap">
            {projects.map((item, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 flex p-2 text-gray-600"
              >
                <div className="relative shadow-sm border rounded-xl p-4 pb-20 md:pb-16">
                  <div>
                    <p className="text-lg font-semibold">{item?.title}</p>
                    <p className="text-sm">{item?.description}</p>
                  </div>
                  <div className="mt-2 absolute bottom-4 flex flex-wrap md:flex-nowrap gap-4">
                    <a
                      href={item.live_project_link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm px-3 py-1.5 rounded-lg shadow-md transition-transform transform hover:scale-105
             bg-gradient-to-b from-blue-100 to-blue-400 text-white border-2 border-blue-300"
                    >
                      Live Project
                    </a>
                    <a
                      href={item.source_code_link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm px-3 py-1.5 rounded-lg shadow-md transition-transform transform hover:scale-105
             bg-gradient-to-b from-gray-100 to-gray-400 text-white border-2 border-gray-300"
                    >
                      View Source Code
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

export default Projects;
