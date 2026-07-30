import { motion } from "framer-motion";
import { certifications } from "../../data/certifications";
import { fadeUp, fadeIn, viewportOnce } from "../../utils/animations";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative w-full bg-neutral-950 py-24 px-6 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-cyan-600/15 rounded-full blur-[150px] pointer-events-none" />

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
            Certifications
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
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Certifications
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[300px] w-full max-w-[280px] overflow-hidden rounded-xl border border-cyan-500/30 bg-neutral-900/40 backdrop-blur-sm shadow-[0_0_25px_rgba(34,211,238,0.15)] hover:border-cyan-400/60 transition-colors duration-300"
            >
              <div className="absolute inset-0.5 z-[1] flex flex-col items-start justify-start gap-3 rounded-lg bg-neutral-950/60 p-4 text-white">
                <div className="relative h-28 w-full overflow-hidden rounded-md bg-neutral-800 flex justify-center items-center">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-neutral-500 text-sm">
                      Certificate preview
                    </div>
                  )}
                </div>

                <div className="flex flex-col flex-1 w-full">
                  <p className="text-lg font-bold">{cert.title}</p>
                  <p className="text-sm text-cyan-400 font-medium mt-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">{cert.date}</p>
                </div>

                {cert.credentialLink && (
                  <div className="flex justify-end items-end w-full">
                    <button
                      type="button"
                      onClick={() =>
                        window.open(cert.credentialLink, "_blank", "noopener,noreferrer")
                      }
                      className="shrink-0 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 duration-300 transition-all"
                      aria-label={`Verify ${cert.title}`}
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
                        className="w-7 h-7 text-cyan-400 hover:scale-110 transition-transform"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M13 18l6 -6" />
                        <path d="M13 6l6 6" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>

              <div className="absolute transition-all duration-500 top-1/2 -left-1/2 group-hover:top-12 group-hover:-left-1/4 h-48 w-56 -z-10 bg-cyan-600/60 blur-[50px]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;