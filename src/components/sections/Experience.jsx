import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
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

                <div className="border border-cyan-500/20 rounded-2xl p-6 md:p-7 bg-neutral-900/40 backdrop-blur-sm shadow-[0_0_25px_rgba(34,211,238,0.08)] hover:border-cyan-500/40 transition-colors duration-300">
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

                  <ul className="flex flex-col gap-2">
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