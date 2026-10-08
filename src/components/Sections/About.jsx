import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import kccImg from "../../assets/kcc.img.jpg";

const About = () => {
  const frontendSkills = ["HTML", "CSS", "JAVASCRIPT", "React", "TailwindCSS"];
  const tools = ["Git", "Github", "MS Word", "MS Excel"];
  const languages = ["C++", "Python"];
  const database = ["MySQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center py-20 px-4"
    >
      <RevealOnScroll>
        <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>
      </RevealOnScroll>
      <RevealOnScroll>
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-30 lg:pl-32">
          <div className="w-64 h-64 md:w-80 md:h-80 shrink-0">
            <img
              src={kccImg}
              alt="kcc"
              className="w-full h-full object-cover rounded-full border-0 transition-all hover:-translate-y-1 hover:border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            />
          </div>
          <div className="max-w-3xl">
            <div className="rounded-xl text-center p-7 border border-white/10 hover:-translate-y-1 transition-all">
              <p className="text-gray-300 mb-5">
                Loves turning ideas into clean, interactive, and engaging web
                experiences. Always learning, building, and experimenting with
                new technologies.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Frontend</h3>

                  <div className="flex flex-wrap items-center gap-3">
                    {frontendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Tools</h3>

                  <div className="flex flex-wrap gap-3">
                    {tools.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Languages</h3>

                  <div className="flex flex-wrap items-center gap-3">
                    {languages.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Database</h3>

                  <div className="flex flex-wrap items-center gap-3">
                    {database.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border border-white/5 hover:-translate-y-1 hover:border-blue-500/20 transition-all">
                  <h3 className="text-xl font-bold mb-4">Education</h3>

                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      <strong>
                        B.Tech — Computer Science & Information Technology
                      </strong>
                      <br />
                      KCC Institute of Technology & Management (2023-2027)
                    </li>
                  </ul>
                </div>
                <div className="p-6 rounded-xl border border-white/5 hover:-translate-y-1 hover:border-blue-500/20 transition-all">
                  <h3 className="text-xl font-bold mb-4">Certifications</h3>

                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      <strong>AI Essentials with Intel</strong>
                      <br />
                      Certification Training Program
                    </li>

                    <li>
                      <strong>Advanced Basic Computer Fundamentals</strong>
                      <br />
                      Shri Institute of Information Technology
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
