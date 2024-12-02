import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-50 via-purple-100 to-gray-200 text-gray-800 relative"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-80 h-80 bg-purple-200 opacity-20 blur-3xl rounded-full top-16 left-20"></div>
        <div className="absolute w-96 h-96 bg-pink-300 opacity-10 blur-3xl rounded-full bottom-20 right-16"></div>
      </div>

      <div className="container mx-auto text-center relative z-10 max-w-4xl px-6">
        {/* Heading */}
        <h2
          className="text-5xl font-bold mb-6 text-gray-900"
          data-aos="fade-up"
        >
          About <span className="text-purple-600">Me</span>
        </h2>

        {/* Content */}
        <p
          className="text-lg leading-relaxed mb-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Hi, I’m <span className="text-purple-600 font-bold">Omer Laufer</span>
          , a passionate Software and Information Systems Engineering student at
          Ben-Gurion University of the Negev. My journey revolves around
          building innovative solutions that bridge technology and creativity.
        </p>

        <p
          className="text-lg leading-relaxed mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I specialize in{" "}
          <span className="font-semibold">full-stack development</span>,{" "}
          <span className="font-semibold">data analysis</span>, and{" "}
          <span className="font-semibold">game design</span> using Unity. I
          enjoy turning complex problems into simple, elegant solutions through
          thoughtful design and efficient code.
        </p>

        <p
          className="text-lg leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          I’m always looking to learn, grow, and collaborate on projects that
          make a meaningful impact. Let's connect and create something
          extraordinary together!
        </p>
      </div>
    </section>
  );
};

export default About;
