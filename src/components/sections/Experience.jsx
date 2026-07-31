import { motion } from "framer-motion";
import { Calendar, ExternalLink } from "lucide-react";
import { experiences } from "../../data/experience";
import { fadeUp, fadeIn, slideInLeft, viewportOnce } from "../../utils/animations";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full bg-neutral-950 py-24 px-6 overflow-hidden"
    >
      <div className="absolute top-1/3 right-0 -translate-y-1/2 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex items-center gap-3 mb-4 justify-center"
        >
          <span className="h-px w-8 bg-cyan-400" />
          <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase">
            Experience
          </span>
          <span className="h-px w-8 bg-cyan-400" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-3xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Where I've{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Worked
          </span>
        </motion.h2>

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-cyan-500/20" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <span
                  className="absolute -left-8 md:-left-10 top-6 w-3.5 h-3.5 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20"
                  style={{ boxShadow: "0 0 12px rgba(34,211,238,0.7)" }}
                />

                <div className="relative border border-cyan-500/20 rounded-2xl p-6 md:p-7 pb-16 sm:pb-6 md:pb-7 bg-neutral-900/40 backdrop-blur-sm shadow-[0_0_25px_rgba(34,211,238,0.08)] hover:border-cyan-500/40 transition-colors duration-300">
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 z-10">
                    {exp.linkedinLink && (
                      <a
                        href={exp.linkedinLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${exp.company} LinkedIn`}
                        className="flex items-center justify-center w-7 h-7 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-300 hover:bg-cyan-500/15 hover:border-cyan-400/50 transition-colors"
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-cyan-300 text-xs px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/15 hover:border-cyan-400/50 transition-colors"
                      >
                        Visit <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-white text-lg font-semibold">
                        {exp.role}
                      </h3>
                      <p className="text-cyan-400 text-sm font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="flex items-center gap-1.5 text-cyan-300 text-xs px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 whitespace-nowrap">
                      <Calendar size={12} />
                      {exp.duration}
                    </span>
                  </div>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <ul className="flex flex-col gap-2 sm:pr-0 pr-24">
                    {exp.highlights.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-neutral-400 text-sm"
                      >
                        <span className="text-cyan-400 mt-1">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;