import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-b from-pink-50 via-purple-100 to-red-200 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-pink-300 opacity-20 blur-3xl rounded-full top-10 left-20"></div>
        <div className="absolute w-96 h-96 bg-purple-300 opacity-20 blur-3xl rounded-full bottom-20 right-10"></div>
        <div className="absolute w-64 h-64 bg-purple-400 opacity-10 blur-2xl rounded-full bottom-10 left-40"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
          Contact <span className="text-pink-600">Me</span>
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Feel free to reach out through the following platforms:
        </p>
        <div className="flex justify-center gap-6">
          {/* Email Button */}
          <a
            href="mailto:laufermen@gmail.com"
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <FaEnvelope className="text-xl group-hover:animate-bounce" />
            Email Me
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/omer-laufer"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <FaLinkedin className="text-xl group-hover:animate-bounce" />
            LinkedIn
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/omer12619"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-black text-white rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <FaGithub className="text-xl group-hover:animate-bounce" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
