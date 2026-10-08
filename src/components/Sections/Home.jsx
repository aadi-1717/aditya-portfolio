import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import aadiImg from "../../assets/aadi1.jpeg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex justify-center items-center relative px-4"
    >
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Hi, I am Aditya
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              I'm a B.Tech Computer Science student learning and building with
              modern frontend technologies.
            </p>

            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#project"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-x-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-x-0.5 hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="w-64 h-64 md:w-80 md:h-80">
            <img
              src={aadiImg}
              alt="aadi"
              className="w-full h-full object-cover rounded-full border transition-all hover:-translate-y-1 hover:border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
