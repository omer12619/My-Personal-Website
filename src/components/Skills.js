const Skills = () => {
  const skills = [
    "JavaScript",
    "Python",
    "React",
    "Node.js",
    "Vue.js",
    "MySQL",
    "Unity",
    "Sass Tools",
    "Project Manager",
  ];

  return (
    <section
      id="skills"
      className="py-16 relative bg-gradient-to-b from-gray-50 via-purple-50 to-pink-100"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-purple-200 opacity-20 blur-3xl rounded-full top-10 left-20"></div>
        <div className="absolute w-96 h-96 bg-pink-300 opacity-20 blur-3xl rounded-full bottom-20 right-10"></div>
        <div className="absolute w-64 h-64 bg-purple-400 opacity-10 blur-2xl rounded-full bottom-10 left-40"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-10">
          My <span className="text-purple-600">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative group bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 py-3 px-6 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
            >
              <span className="text-lg font-medium">{skill}</span>
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-purple-100 opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
