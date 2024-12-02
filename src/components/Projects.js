const Projects = () => {
  const projects = [
    {
      name: "Recipe App",
      description:
        "A web site that manages recipes with client-side and server-side.",
      link: "https://github.com/WED-2023/assignment2-1-316120096_209512722.git",
    },
    {
      name: "Triva Game",
      description:
        "A Trivia game that can be played over a local network with multiple players using TCP/UDP.",
      link: "https://github.com/omer12619/TriviaKing",
    },
    {
      name: "2D Roguelike Game (in progress)",
      description: "A Unity-based 2D game.",
      link: "https://github.com/omer12619/2d-roguelike-game",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-b from-pink-50 via-purple-100 to-red-200 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-pink-300 rounded-full opacity-50 blur-3xl animate-spin-slow top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-purple-300 rounded-full opacity-40 blur-3xl animate-bounce top-40 right-20"></div>
        <div className="absolute w-96 h-96 bg-red-300 rounded-full opacity-20 blur-2xl animate-pulse top-64 left-1/4"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-10">
          My <span className="text-pink-600">Projects</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white transform hover:-translate-y-3 hover:scale-105"
              style={{ perspective: "1000px" }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-500"></div>

              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

              {/* Project Title */}
              <h3 className="text-3xl font-bold mb-4 group-hover:text-pink-600 transition-colors duration-300">
                {project.name}
              </h3>

              {/* Project Description */}
              <p className="text-gray-600 mb-6 group-hover:text-gray-800 transition-colors duration-300">
                {project.description}
              </p>

              {/* View Project Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-block px-6 py-3 text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:from-purple-600 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Project
              </a>

              {/* Decorative Moving Element */}
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-pink-500 rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
