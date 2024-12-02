const Career = () => {
  const career = [
    {
      title: "Software Engineer",
      company: "Abra-IT",
      dates: "2024 - Present",
      description: [
        "Developed and deployed innovative software solutions for client needs.",
        "Collaborated with cross-functional teams to design and implement scalable applications.",
        "Improved system efficiency through optimized code and robust testing procedures.",
      ],
    },
    {
      title: "System Implementor",
      company: "Code for Israel",
      dates: "2023 - Present",
      description: [
        "Volunteered to develop and implement systems for social initiatives.",
        "Streamlined workflows by automating key processes.",
        "Provided technical support and maintenance for implemented systems.",
      ],
    },
    {
      title: "ALM Developer",
      company: "Abra",
      dates: "2024",
      description: [
        "Worked on Application Lifecycle Management projects.",
        "Integrated tools to improve development workflows and reduce manual intervention.",
        "Contributed to agile practices within the development team.",
      ],
    },
    {
      title: "Company Sergeant Major",
      company: "IDF",
      dates: "2016 - 2019",
      description: [
        "Managed team operations and ensured optimal performance under high-pressure situations.",
        "Supervised logistics and administrative duties for the unit.",
        "Implemented structured training programs for soldiers.",
      ],
    },
  ];

  return (
    <section
      id="career"
      className="py-16 bg-gradient-to-b from-pink-50 via-purple-100 to-red-200 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-pink-300 opacity-20 blur-3xl rounded-full top-10 left-20"></div>
        <div className="absolute w-96 h-96 bg-purple-300 opacity-20 blur-3xl rounded-full bottom-20 right-10"></div>
        <div className="absolute w-64 h-64 bg-purple-400 opacity-10 blur-2xl rounded-full bottom-10 left-40"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-10">
          My <span className="text-pink-600">Career</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {career.map((job, index) => (
            <div
              key={index}
              className="group relative overflow-hidden border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white transform hover:-translate-y-3 hover:scale-105"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-500"></div>

              <h3 className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                {job.title}
              </h3>
              <p className="text-gray-500 mb-4">{job.company}</p>
              <p className="text-gray-400 mb-6">{job.dates}</p>
              <ul className="list-disc list-inside text-left text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {job.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
