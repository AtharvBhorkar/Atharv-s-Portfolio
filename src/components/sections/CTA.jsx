import { motion } from "framer-motion";
import { FiArrowRight, FiMail, FiZap, FiUsers, FiShield } from "react-icons/fi";
import { fadeUp, fadeIn, viewportOnce } from "../../utils/animations";

const CTA = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    {
      icon: FiZap,
      title: "Quick Response",
      desc: "I usually reply within 24 hours.",
      accent: "#c084fc",
    },
    {
      icon: FiUsers,
      title: "Open to Collaborate",
      desc: "Let's create something impactful.",
      accent: "#22d3ee",
    },
    {
      icon: FiShield,
      title: "Trusted & Professional",
      desc: "Your project is in safe hands.",
      accent: "#a78bfa",
    },
  ];

  return (
    <section className="relative w-full bg-neutral-950 py-24 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-cyan-600/15 rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative z-10 max-w-5xl mx-auto rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-neutral-900/60 to-neutral-950/60 px-6 sm:px-10 py-16 overflow-hidden"
        style={{ boxShadow: "0 0 60px rgba(34,211,238,0.15)" }}
      >
        <div className="relative text-center">

          <div className="relative inline-block">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
            >
              Let's build something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                great
              </span>{" "}
              together.
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto mb-14"
          >
            Have a project in mind, an opportunity to discuss, or just want to
            say hi? My inbox is always open.
          </motion.p>
          <div className="relative flex flex-col items-center mb-16">
            <motion.button
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: 0.3 }}
              onClick={() => scrollToSection("contact")}
              className="relative z-10 flex items-center gap-3 px-8 py-4 rounded-full border border-cyan-400/60 bg-neutral-900/80 text-white font-semibold hover:scale-105 transition-transform duration-300"
              style={{
                boxShadow:
                  "0 0 30px rgba(34,211,238,0.35), 0 0 30px rgba(59,130,246,0.25)",
              }}
            >
              <FiMail size={18} />
              Send a Message
              <span className="flex items-center justify-center w-8 h-8 rounded-full border border-cyan-400/60 ml-1">
                <FiArrowRight size={14} />
              </span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;