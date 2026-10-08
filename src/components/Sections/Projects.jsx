import React from "react";
import { MoveRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  const technology = ["HTML", "CSS", "JAVASCRIPT"];
  const tech = ["HTML", "CSS", "JAVASCRIPT", "jQuery"];
  return (
    <section
      id="project"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to bg-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
              <h3 className="text-xl font-bold mb-2">Tic-Tac-Toe</h3>
              <p className="text-gray-400">
                Responsive Tic-Tac-Toe game with interactive gameplay, win/draw
                detection, and game reset functionality.
              </p>
              <div className="flex gap-6 md:flex mt-4">
                {technology.map((tech, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
              <div className="flex items-center">
                <a
                  href="https://github.com/aadi-1717/tictactoe-game"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center gap-2 "
                >
                  View Project <MoveRight size={12} />
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
              <h3 className="text-xl font-bold mb-2">Simon Game</h3>
              <p className="text-gray-400">
                Interactive memory game featuring progressively challenging
                sequences, user input validation, sound effects, and game-over
                handling.
              </p>
              <div className="flex gap-6 md:flex mt-4">
                {tech.map((tech, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
              <div className="flex items-center">
                <a
                  href="https://github.com/aadi-1717/simon-game"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center gap-2 "
                >
                  View Project <MoveRight size={12} />
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
              <h3 className="text-xl font-bold mb-2">Drum Kit Game</h3>
              <p className="text-gray-400">
                A virtual drum kit that lets users play different drum sounds
                using keyboard keys or on-screen buttons.
              </p>
              <div className="flex gap-6 md:flex mt-4">
                {tech.map((tech, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
              <div className="flex items-center">
                <a
                  href="https://github.com/aadi-1717/play-drums-for-fun"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center gap-2 "
                >
                  View Project <MoveRight size={12} />
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
