const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-900 via-pink-700 to-red-600 text-white py-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Name */}
        <h1 className="text-3xl font-extrabold tracking-wide hover:scale-110 transform transition-transform duration-300">
          <span className="text-pink-400">Omer</span>{" "}
          <span className="text-yellow-300">Laufer</span>
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#about"
                className="text-lg font-semibold hover:text-yellow-300 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-lg font-semibold hover:text-yellow-300 transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#career"
                className="text-lg font-semibold hover:text-yellow-300 transition-colors duration-300"
              >
                Career
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-lg font-semibold hover:text-yellow-300 transition-colors duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lg font-semibold hover:text-yellow-300 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Decorative Line */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-700"></div>
    </header>
  );
};

export default Header;
