import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import { fadeUp, fadeIn, viewportOnce } from "../../utils/animations";

const Projects = () => {
  const videoRefs = useRef([]);
  const sectionRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);
  const cardVideos = [
    "/project1.mp4",
    "/project2.mp4",
    "/project3.mp4",
    "/project4.mp4",
    "/project5.mp4",
    "/project6.mp4",
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sectionRef.current && !sectionRef.current.contains(e.target)) {
        setActiveCard(null);
      }
    };
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full bg-neutral-950 py-24 px-6 overflow-hidden"
    >
            <div className="absolute top-1/4 right-0 -translate-y-1/2 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex items-center gap-3 mb-4 justify-center"
        >
          <span className="h-px w-8 bg-cyan-400" />
          <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase">
            Projects
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
          Things I've{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Built
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => {
                const vid = videoRefs.current[i];
                if (vid) vid.play();
              }}
              onMouseLeave={() => {
                const vid = videoRefs.current[i];
                if (vid) {
                  vid.pause();
                  vid.currentTime = 0;
                }
              }}
              onClick={() => {
                setActiveCard((prev) => (prev === i ? null : i));
                const vid = videoRefs.current[i];
                if (vid) {
                  if (activeCard !== i) vid.play();
                  else {
                    vid.pause();
                    vid.currentTime = 0;
                  }
                }
              }}
              className={`group relative h-[420px] w-full max-w-[280px] overflow-hidden rounded-xl border border-cyan-500/30 bg-neutral-900/40 backdrop-blur-sm shadow-[0_0_25px_rgba(34,211,238,0.15)] hover:border-cyan-400/60 transition-colors duration-300 cursor-pointer ${
                activeCard === i ? "border-cyan-400/60" : ""
              }`}
            >
              {project.lead && (
                <span className="absolute top-3 right-3 z-20 px-3 py-1 rounded-full text-[11px] font-semibold text-neutral-950 bg-gradient-to-r from-blue-400 to-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                  Project Lead
                </span>
              )}

              {/* Base layer: scrolling image, visible by default */}
              {project.image && (
                <div
                  className={`absolute inset-0 w-full h-full overflow-hidden z-0 transition-opacity duration-300 group-hover:opacity-0 ${
                    activeCard === i ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto"
                    animate={{ y: ["0%", "-40%", "0%"] }}
                    transition={{
                      duration: 38,
                      ease: "linear",
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                </div>
              )}

              {/* Hover layer: video + text card, fades in on hover */}
              <div
                className={`absolute inset-0 z-10 flex flex-col bg-neutral-950 transition-opacity duration-300 group-hover:opacity-100 ${
                  activeCard === i ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="relative w-full h-[180px] overflow-hidden shrink-0">
                  {cardVideos[i] && (
                    <video
                      ref={(el) => (videoRefs.current[i] = el)}
                      src={cardVideos[i]}
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                </div>

                <div className="flex flex-col flex-1 gap-3 p-4 text-white overflow-hidden">
                  <p className="text-lg font-bold">{project.title}</p>
                  <p className="text-sm text-neutral-400 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-end w-full mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => window.open(project.liveLink, "_blank", "noopener,noreferrer")}
                      className="shrink-0 hover:scale-110 transition-transform"
                      aria-label={`Visit ${project.title} live site`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-7 h-7 text-cyan-400"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M13 18l6 -6" />
                        <path d="M13 6l6 6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;